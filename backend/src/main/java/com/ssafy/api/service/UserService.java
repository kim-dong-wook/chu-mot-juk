package com.ssafy.api.service;

import com.ssafy.api.dto.LikeListDTO;
import com.ssafy.api.request.LikeListReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.request.UserTagReq;
import com.ssafy.api.response.LikeListRes;
import com.ssafy.api.response.NovelInfoRes;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
@Service("userService")
@Transactional(readOnly = true)
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserTagRepository userTagRepository;

    @Autowired
    UserRepositorySupport userRepositorySupport;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    LikeListRepository likeListRepository;

    @Autowired
    NovelRepository novelRepository;

    @Transactional
    public User createUser(UserRegisterPostReq userRegisterInfo) {
        User user = new User();

        user.setId(userRegisterInfo.getId());
        // 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        user.setNickname(userRegisterInfo.getNickname());
        user.setAgeGroup(userRegisterInfo.getAgeGroup());
        user.setGender(userRegisterInfo.getGender());

        return userRepository.save(user);
    }

    public boolean checkUserId(String id) {
        boolean result = userRepositorySupport.findByUserIdEquals(id);

        if (result)
            throw new CustomException(ErrorCode.ID_ALREADY_EXISTS);

        return true;
    }


    public User getUserByUserId(String userId) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        User user = userRepositorySupport.findUserById(userId).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        return user;
    }


    public User getUserByUserNo(Long userNo) {
        User user = userRepositorySupport.findUserByUserNo(userNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        return user;
    }


    @Transactional
    public boolean deleteUser(UserRegisterPostReq userRegisterInfo) {

        boolean success = false;

        try {
            User user = userRepository.findById(userRegisterInfo.getId()).orElseThrow(() -> {
                throw new CustomException(ErrorCode.USER_NOT_FOUND);
            });
            userRepository.delete(user);
            success = true;
        } catch (Exception e) {
            success = false;
        }

        return success;
    }

    @Transactional
    public User modifyUser(UserRegisterPostReq userRegisterInfo) {

        User user = userRepository.findById(userRegisterInfo.getId()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        user.setNickname(userRegisterInfo.getNickname());

        return userRepository.save(user);
    }

    @Transactional
    public List<Tag> getTagsByUserNo(Long userNo) {
        User user = userRepository.findByUserNo(userNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        List<UserTag> userTagList = userTagRepository.findUserTagByUserUserNo(userNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
        });
        List<Tag> tagList = new ArrayList<>();
        for (UserTag n : userTagList) {
            if (!tagList.contains(n.getTag()))
                tagList.add(n.getTag());
        }
        return tagList;
    }

    @Transactional
    public boolean deleteTags(UserTagReq userTagReq) {
        boolean flag = true;
        User user = userRepository.findById(userTagReq.getUserNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });

        Tag tag = tagRepository.findTagByTagNo(userTagReq.getTagNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });

        UserTag userTag = userTagRepository.findUserTagByUserUserNoAndTagTagNo(userTagReq.getUserNo(), userTagReq.getTagNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
        });

        try {
            userTagRepository.delete(userTag);
        } catch (Exception e) {
            flag = false;
        }
        return flag;
    }

    @Transactional
    public boolean addTags(UserTagReq userTagInfo) {
        UserTag userTag = new UserTag();
        User user = userRepository.findById(userTagInfo.getUserNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        userTag.setTag(tagRepository.findTagByTagNo(userTagInfo.getTagNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        }));
        userTag.setUser(userRepository.findById(userTagInfo.getUserNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }));

        if (userTagRepository.findUserTagByUserUserNoAndTagTagNo(user.getUserNo(), userTagInfo.getTagNo()).isPresent()) {
            throw new CustomException(ErrorCode.LIST_ALREADY_EXISTS);
        } else
            userTagRepository.save(userTag);
        return true;
    }

    public List<LikeListDTO> getLikeListByUserNo(Long userNo) {
        User user = userRepository.findByUserNo(userNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        List<LikeList> likeList = likeListRepository.findLikeListsByUserUserNo(userNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
        });
        List<LikeListDTO> list = new ArrayList<>();
        for(int i = 0; i < likeList.size(); i++) {
            LikeListDTO likeListDTO = new LikeListDTO();
            likeListDTO.setLikeNo(likeList.get(i).getLikeNo());
            likeListDTO.setNovelNo(likeList.get(i).getNovel().getNovelNo());
            list.add(likeListDTO);
        }
        return list;
    }

    @Transactional
    public boolean deleteLikeList(LikeListReq likeListInfo) {
        boolean flag = true;
        User user = userRepository.findByUserNo(likeListInfo.getUserNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });

        Novel novel = novelRepository.findNovelByNovelNo(likeListInfo.getNovelNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });

        LikeList likeList = likeListRepository.findLikeListByUserUserNoAndNovelNovelNo(likeListInfo.getUserNo(), likeListInfo.getNovelNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
        });

        try {
            likeListRepository.delete(likeList);
        } catch (Exception e) {
            flag = false;
        }
        return flag;
    }

    @Transactional
    public boolean addLikeList(LikeListReq likeListInfo) {
        LikeList likeList = new LikeList();

        likeList.setUser(userRepository.findByUserNo(likeListInfo.getUserNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        }));
        likeList.setNovel(novelRepository.findNovelByNovelNo(likeListInfo.getNovelNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        }));

        if (likeListRepository.findLikeListByUserUserNoAndNovelNovelNo(likeListInfo.getUserNo(), likeListInfo.getNovelNo()).isPresent()) {
            throw new CustomException(ErrorCode.LIST_ALREADY_EXISTS);
        } else
            likeListRepository.save(likeList);
        return true;
    }
}
