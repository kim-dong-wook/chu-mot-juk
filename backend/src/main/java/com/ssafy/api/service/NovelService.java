package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.NovelTag;
import com.ssafy.db.repository.NovelRepository;
import com.ssafy.db.repository.NovelTagRepository;
import com.ssafy.db.repository.TagRepository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

/**
 * 소설 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
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

    public Novel getNovelInfoByNovelNo(Long novelNo) {
        Novel novel = novelRepository.findNovelByNovelNo(novelNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });
        return novel;
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
        return shelf;
    }

    @Transactional
    public void addNovels() throws IOException, ParseException {

        // JSON 파일 읽기
        Reader reader = new FileReader("C:\\result_ridi_romance.json");
        System.out.println("read");
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(reader);
        System.out.println("parse");
        JSONArray jsonArr = (JSONArray) obj;
        System.out.println("array");
        for (int i = 0; i < jsonArr.size(); i++) {
            JSONObject jsonObj = (JSONObject) jsonArr.get(i);
            System.out.println(i + "번째 get");

            String number = (String) jsonObj.get("thumbnail");
            String[] s = number.split("/");
            System.out.println("s split");
            String epi = (String) jsonObj.get("recent_episode");
            String[] e = epi.split(" ");
            System.out.println("e split");

            Novel novel = new Novel();
            System.out.println("novel 객체 생성");
            novel.setNovelTitle((String) jsonObj.get("title"));
            System.out.println("title");
            novel.setNovelWriter((String) jsonObj.get("author"));
            System.out.println("author");
            novel.setNovelIntro((String) jsonObj.get("guide"));
            System.out.println("guide");
            novel.setNovelRomanceGuide((String) jsonObj.get("romance_guide"));
            System.out.println("romance_guide");
            novel.setNovelLink("https://ridibooks.com/books/" + s[4]);
            System.out.println("link");

            if (e[1].length() == 3) {
                novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 2)));
            } else if (e[1].length() == 4)
                novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 3)));
            else if (e[1].length() == 5)
                novel.setNovelNewest(Integer.parseInt(e[1].substring(0, 4)));

            System.out.println("newest");
            String com = (String) jsonObj.get("is_completed");
            novel.setNovelIsCompleted(com.equals("완결") ? true : false);
            System.out.println("completed?");
            novel.setNovelThumbnail((String) jsonObj.get("thumbnail"));
            System.out.println("thumbnail");
            novel.setNovelIntroImage((String) jsonObj.get("introduce_img"));
            System.out.println("img");
            novel.setNovelPlatform("리디북스");
            System.out.println("platform");
            novel.setNovelGenre(0);
            System.out.println("genre");

            novelRepository.save(novel);
            System.out.println("novel save");


            JSONArray jsonArray = (JSONArray) jsonObj.get("keywords");
            for (int k = 0; k < jsonArray.size(); k++) {
                NovelTag novelTag = new NovelTag();
                Long num = Long.valueOf(i);
                System.out.println("num :" + num);
                novelTag.setNovel(novelRepository.findNovelByNovelNo(num + 1).orElseThrow(() -> {
                    throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
                }));
                System.out.println("set Novel");
                String tags = (String) jsonArray.get(k);
                String newTag = tags.substring(1);
                System.out.println("tags :" + newTag);
                novelTag.setTag(tagRepository.findTagByTagNameAndTagGenre(newTag, 0).orElseThrow(() -> {
                    throw new CustomException(ErrorCode.TAG_NOT_FOUND);
                }));
                System.out.println("set tag");
                novelTagRepository.save(novelTag);
                System.out.println("novelTag save");
            }


            }
    }

}