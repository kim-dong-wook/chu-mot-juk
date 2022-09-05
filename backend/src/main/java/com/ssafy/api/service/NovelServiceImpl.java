package com.ssafy.api.service;

import com.ssafy.db.entity.Novel;
import com.ssafy.db.repository.NovelRepository;
import com.ssafy.db.repository.NovelRepositorySupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("NovelService")
public class NovelServiceImpl implements NovelService{

    @Autowired
    NovelRepository novelRepository;

    @Autowired
    NovelRepositorySupport novelRepositorySupport;

    //이름으로 조회
    @Override
    public List<Novel> getNovelsByNovelTitle(String novelTitle) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        List<Novel> book = novelRepository.findNovelsByNovelTitle(novelTitle).get();
        if (book.isEmpty() == true) {
            return null;
        }

        return book;
    }

    @Override
    public List<Novel> getNovelsByNovelWriter(String novelWriter) {
        List<Novel> book = novelRepository.findNovelsByNovelWriter(novelWriter).get();

        if (book.isEmpty() == true)
            return null; //error 코드 줘도 좋을 듯? 404라거나
        return book;
    }

    @Override
    public Novel getNovelInfoByNovelNo(int novelNo) {
        Novel novel = novelRepository.findNovelByNovelNo(novelNo).get();
        return novel;
    }

//    public List<Novel> getNovelsByTag(String tag) {
//
//    }
}
