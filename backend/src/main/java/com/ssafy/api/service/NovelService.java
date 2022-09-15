package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.NovelTag;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.NovelRepository;
import com.ssafy.db.repository.NovelTagRepository;
import com.ssafy.db.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

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

}