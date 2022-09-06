package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
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

        return book;
    }

    @Override
    public List<Novel> getNovelsByNovelWriter(String novelWriter) {
        List<Novel> book = novelRepository.findNovelsByNovelWriter(novelWriter).get();
        return book;
    }

    @Override
    public Novel getNovelInfoByNovelNo(Long novelNo) {
        Novel novel = novelRepository.findNovelByNo(novelNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
        });
        return novel;
    }

    @Override
    public List<Novel> getNovelsByNovelTag(NovelTagSearchReq tagsInfo) {
        List<Novel> shelf = new ArrayList<>();
        //여기 클린코딩 해야 되니까 이렇게 말고 다르게 하는 법 생각해보자
        List<Novel> book = new ArrayList<>();
        if (tagsInfo.getTag1() != null){
            book = novelRepository.findNovelsByTag(tagsInfo.getTag1()).orElseThrow(() -> {
                throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
            });
            shelf.addAll(book);
        }

        if (tagsInfo.getTag2() != null){
            book = novelRepository.findNovelsByTag(tagsInfo.getTag2()).orElseThrow(() -> {
                throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
            });
            shelf.addAll(book);
        }
        if (tagsInfo.getTag3() != null){
            book = novelRepository.findNovelsByTag(tagsInfo.getTag3()).orElseThrow(() -> {
                throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
            });
            shelf.addAll(book);
        }
        if (tagsInfo.getTag4() != null){
            book = novelRepository.findNovelsByTag(tagsInfo.getTag4()).orElseThrow(() -> {
                throw new CustomException(ErrorCode.NOVEL_NOT_FOUND);
            });
            shelf.addAll(book);
        }
        return shelf;
    }


}
