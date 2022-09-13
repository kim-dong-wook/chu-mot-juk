package com.ssafy.api.service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.request.UserTagReq;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.Tag;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserTag;
import com.ssafy.db.repository.TagRepository;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;
import com.ssafy.db.repository.UserTagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * 유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {
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

    @Override
    @Transactional
    public User createUser(UserRegisterPostReq userRegisterInfo) {
        User user = new User();

        user.setId(userRegisterInfo.getId());
        // 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        user.setNickname(userRegisterInfo.getNickname());
        user.setAge(userRegisterInfo.getAge());
        user.setGender(userRegisterInfo.getGender());

        return userRepository.save(user);
    }

    @Override
    public boolean checkUserId(String id) {
        boolean result = userRepositorySupport.findByUserIdEquals(id);
        return result;
    }

    @Override
    public User getUserByUserId(String userId) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        User user = userRepositorySupport.findUserById(userId).get();
        return user;
    }

    @Override
    public User getUserByUserNo(Long userNo) {
        User user = userRepositorySupport.findUserByUserNo(userNo).get();
        return user;
    }


    @Override
    @Transactional
    public boolean deleteUser(UserRegisterPostReq userRegisterInfo) {

        boolean success = false;

        try {
            User user = userRepository.findById(userRegisterInfo.getId()).get();
            userRepository.delete(user);
            success = true;
        } catch (Exception e) {
            success = false;
        }

        return success;
    }

    @Override
    @Transactional
    public User modifyUser(UserRegisterPostReq userRegisterInfo) {

        User user = userRepository.findById(userRegisterInfo.getId()).get();
        user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
        user.setNickname(userRegisterInfo.getNickname());

        return userRepository.save(user);
    }

    @Override
    public List<Tag> getTagsByUserNo(Long userNo) {
        List<UserTag> userTagList = userTagRepository.findUserTagByUserUserNo(userNo).orElseThrow(() -> {
			throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
		});
        System.out.println(userTagList.size());
        List<Tag> tagList = new ArrayList<>();
        for (UserTag n : userTagList) {
            if (!tagList.contains(n.getTag()))
                tagList.add(n.getTag());
        }
        return tagList;
    }

    @Override
    @Transactional
    public boolean deleteTags(UserTagReq userTagReq) {
        boolean flag;
        User user = userRepository.findById(userTagReq.getUserId()).orElseThrow(() -> {
			throw new CustomException(ErrorCode.USER_NOT_FOUND);
		});

        Long userNo = user.getUserNo();
        try {
            UserTag userTag = userTagRepository.findUserTagByUserUserNoAndTagTagNo(userNo, userTagReq.getTagNo()).orElseThrow(() -> {
				throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
			});
            userTagRepository.delete(userTag);
            flag = true;
        } catch (Exception e) {
            flag = false;
        }
        return flag;
    }

    @Override
    @Transactional
    public boolean addTags(UserTagReq userTagInfo) {
        UserTag userTag = new UserTag();
        User user = userRepository.findById(userTagInfo.getUserId()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.USER_NOT_FOUND);
        });
        Tag tag = tagRepository.findTagByTagNo(userTagInfo.getTagNo()).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });
        userTag.setTag(tagRepository.findTagByTagNo(userTagInfo.getTagNo()).get());
        userTag.setUser(userRepository.findById(userTagInfo.getUserId()).get());
        if (userTagRepository.findUserTagByUserUserNoAndTagTagNo(user.getUserNo(), userTagInfo.getTagNo()).isPresent()) {
            throw new CustomException(ErrorCode.LIST_ALREADY_EXISTS);
        } else
            userTagRepository.save(userTag);
        return true;
    }
}
