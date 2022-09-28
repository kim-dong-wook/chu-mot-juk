package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.api.request.SuggestionReq;
import com.ssafy.api.response.NovelInfoRes;
import com.ssafy.api.response.NovelRes;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.*;
import java.util.function.Function;

/**
 *	소설 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
@Service("novelService")
@Transactional(readOnly = true)
public class NovelService {
    @Autowired
    NovelRepository novelRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    NovelTagRepository novelTagRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    LikeListRepository likeListRepository;

    //이름으로 조회
    public List<Novel> getNovelsByNovelTitle(String novelTitle) {
        List<Novel> book = novelRepository.findNovelsByNovelTitle(novelTitle).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });

        return book;
    }

    public List<Novel> getNovelsByNovelWriter(String novelWriter) {
        List<Novel> book = novelRepository.findNovelsByNovelWriter(novelWriter).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });
        return book;
    }

    public List<Novel> getNovelsByTag(NovelTagSearchReq tags) {
        List<Novel> shelf = new ArrayList<>();
        //여기 클린코딩 해야 되니까 이렇게 말고 다르게 하는 법 생각해보자
        List<NovelTag> book;
        //교집합 처리를 어떻게 할 것인가
        // -> list 하나 더 추가?
        for (Long a : tags.getTags()) {
            if (a != null) {
                List<Novel> booklist = new ArrayList<>();
                book = novelTagRepository.findNovelTagByTagTagNo(a).orElseThrow(() -> {
                    throw new CustomException(ErrorCode.NOT_FOUND_EXCEPTION);
                });
                if (shelf.isEmpty() == true) {
                    for (NovelTag n : book) {
                        if (!shelf.contains(n.getNovel()))
                            shelf.add(n.getNovel());
                    }
                } else {
                    for (NovelTag n : book) {
                        if (shelf.contains(n.getNovel())) {
                            booklist.add(n.getNovel());
                        }
                    }
                    shelf = booklist;
                }
            }
        }
        if (shelf.isEmpty())
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        else
            return shelf;
    }

    @Transactional
    public void addNovels() throws IOException, ParseException {

        // JSON 파일 읽기
        Reader reader = new FileReader("C:\\result_ridi_romance.json");
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(reader);
        JSONArray jsonArr =(JSONArray) obj;

            for(int i=0; i<jsonArr.size(); i++) {
                JSONObject jsonObj = (JSONObject) jsonArr.get(i);
                String number = (String) jsonObj.get("thumbnail");
                String[] s = number.split("/");
                String epi = (String) jsonObj.get("recent_episode");
                String[] e = epi.split(" ");

                Novel novel = new Novel();
                novel.setNovelTitle((String) jsonObj.get("title"));
                novel.setNovelWriter((String) jsonObj.get("author"));
                novel.setNovelIntro((String) jsonObj.get("guide"));
                novel.setNovelRomanceGuide((String) jsonObj.get("romance_guide"));
                novel.setNovelLink("https://ridibooks.com/books/" + s[4]);

                if (e[1].length() == 3) {
                    novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 2)));
                } else if (e[1].length() == 4)
                    novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 3)));
                else if (e[1].length() == 5)
                    novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 4)));

                String com = (String) jsonObj.get("is_completed");
                novel.setNovelIsCompleted(com.equals("완결") ? true : false);
                novel.setNovelThumbnail((String) jsonObj.get("thumbnail"));
                novel.setNovelIntroImage((String) jsonObj.get("introduce_img"));
                novel.setNovelPlatform("리디북스");
                novel.setNovelGenre(0); // 장르 변경 해주기
                novelRepository.save(novel);

                JSONArray jsonArray = (JSONArray) jsonObj.get("keywords");
                for (int k = 0; k < jsonArray.size(); k++) {
                    NovelTag novelTag = new NovelTag();
                    Long num = Long.valueOf(i);
                    novelTag.setNovel(novelRepository.findNovelByNovelNo(num + 1).orElseThrow(() -> {
                        throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
                    }));
                    String tags = (String) jsonArray.get(k);
                    String newTag = tags.substring(1);
                    novelTag.setTag(tagRepository.findTagByTagNameAndTagGenre(newTag, 0).orElseThrow(() -> {
                        throw new CustomException(ErrorCode.TAG_NOT_FOUND);
                    }));
                    novelTagRepository.save(novelTag);
                }
            }
    }//add novels

    public NovelInfoRes getNovelInfoByNovelNo(Long novelNo) {
        NovelInfoRes novelInfoRes = new NovelInfoRes();
        Novel novel = novelRepository.findNovelByNovelNo(novelNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });

        novelInfoRes.setNovelNo(novel.getNovelNo());
        novelInfoRes.setNovelTitle(novel.getNovelTitle());
        novelInfoRes.setNovelWriter(novel.getNovelWriter());
        novelInfoRes.setNovelGenre(novel.getNovelGenre());
        novelInfoRes.setNovelIntro(novel.getNovelIntro());
        novelInfoRes.setNovelIntroImage(novel.getNovelIntroImage());
        novelInfoRes.setNovelCompleted(novel.isNovelIsCompleted());
        novelInfoRes.setNovelLink(novel.getNovelLink());
        novelInfoRes.setNovelNewest(novel.getNovelNewest());
        novelInfoRes.setNovelThumbnail(novel.getNovelThumbnail());
        novelInfoRes.setNovelPlatform(novel.getNovelPlatform());
        novelInfoRes.setNovelRomanceGuide(novel.getNovelRomanceGuide());

        List<String> tagList = new ArrayList<>();
        for (NovelTag nt : novel.getNovelTags()){
            tagList.add(nt.getTag().getTagName());
        }
        novelInfoRes.setTagNames(tagList);

        return novelInfoRes;
    }

    @Transactional
    public List<NovelInfoRes> getFamousNovels(List<User> users) {
        Map<Long, Integer> map = new HashMap<>();
        System.out.println(users.size());

        for (User u : users) {
            List<LikeList> lList = likeListRepository.findLikeListsByUserUserNo(u.getUserNo()).get();
            for (LikeList l : lList) {
                if (map.containsKey(l.getNovel().getNovelNo())) {
                    map.put(l.getNovel().getNovelNo(), map.get(l.getNovel().getNovelNo()) + 1);
                }else {
                    map.put(l.getNovel().getNovelNo(), 1);
                }
            }

        }
        List<Long> keySetList = new ArrayList<>(map.keySet());

        // Value 값으로 내림차순 정렬
        Collections.sort(keySetList, (o1, o2) -> (map.get(o2).compareTo(map.get(o1))));

        List<NovelInfoRes> novelList = new ArrayList<>();
        int cnt = 0;
        for (Long key : keySetList) {
            System.out.println(key);
            if (cnt > 20)
                break;
            NovelInfoRes novelInfoRes = getNovelInfoByNovelNo(key);
            novelList.add(novelInfoRes);
            cnt++;
        }

        return novelList;
    }


    //특정 age의 사람들이 좋아하는 소설을 list에 담아 전부 ++;
    //그 다음 크기 순으로 return
    @Transactional
    public List<NovelInfoRes> getNovelsByParticularAgeGroup(int ageGroup) {
        List<User> users = userRepository.findUsersByAgeGroup(ageGroup).get();
        List<NovelInfoRes> bookList = getFamousNovels(users);
        return bookList;
    }

    @Transactional
    public List<NovelInfoRes> getNovelsByParticularAgeGroupAndGender(SuggestionReq suggestionReq) {
        List<User> users = userRepository.findUsersByAgeGroupAndGender(suggestionReq.getAgeGroup(), suggestionReq.isGender()).get();
        List<NovelInfoRes> bookList = getFamousNovels(users);
        return bookList;
    }

    public List<Tag> getTagsByTagGenre(int tagGenre) {
        List<Tag> tags = tagRepository.findTagByTagGenre(tagGenre).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });
        return tags;
    }

    public List<Tag> getRomanceTagsByTagType(int tagType) {
        List<Tag> tags = tagRepository.findRomanceTagByTagType(tagType).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });
        return tags;
    }

    public List<Tag> getFantasyTagsByTagType(int tagType) {
        List<Tag> tags = tagRepository.findFantasyTagByTagType(tagType).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });

        return tags;
    }

    public List<Tag> getBlTagsByTagType(int tagType) {
        List<Tag> tags = tagRepository.findBlTagByTagType(tagType).orElseThrow(() -> {
            throw new CustomException(ErrorCode.TAG_NOT_FOUND);
        });

        return tags;
    }

    public List<Novel> getNovelsByNovelPlatform(String novelPlatform) {
        List<Novel> book = novelRepository.findNovelsByNovelPlatform(novelPlatform).orElseThrow(() -> {
            throw new CustomException(ErrorCode.PLATFORM_NOT_FOUND);
        });
        return book;
    }

    public NovelRes getNovelsByNovelNo(Novel novel) {
        NovelRes novelRes = new NovelRes();

        novelRes.setNovelNo(novel.getNovelNo());
        novelRes.setNovelTitle(novel.getNovelTitle());
        novelRes.setNovelThumbnail(novel.getNovelThumbnail());

        List<String> tagList = new ArrayList<>();
        for (NovelTag nt : novel.getNovelTags()){
            tagList.add(nt.getTag().getTagName());
        }
        novelRes.setTagNames(tagList);

        return novelRes;
    }

    public Page<NovelRes> getNovelsByNovelGenre(Integer novelGenre, Pageable pageable){
        Page<Novel> novels = novelRepository.findNovelsByNovelGenre(novelGenre, pageable).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });

        List<NovelRes> novelResList = new ArrayList<>();

        for (Novel n : novels) {
            novelResList.add(getNovelsByNovelNo(n));
        }
        return new PageImpl<>(novelResList);
    }

}