package com.ssafy.api.service;

import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.User;
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
    public Novel getNovelByNovelTitle(String novelTitle) {
        // 디비에 유저 정보 조회 (userId 를 통한 조회).
        Novel novel = novelRepository.findNovelByNovelTitle(novelTitle).get();
        return novel;
    }

    @Override
    public List<Novel> getNovelByNovelWriter(String novelWriter) {
        List<Novel> book = new ArrayList<>();
//        book = novelRepository.findNovelByNovelWriter(novelWriter);
        for (Novel n : novelRepository.findNovelByNovelWriter(novelWriter)) {
            book.add(n);
        }
        return book;
    }
}
