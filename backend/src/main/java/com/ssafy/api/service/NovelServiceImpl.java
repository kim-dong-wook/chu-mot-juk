package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.NovelTag;
import com.ssafy.db.repository.NovelRepository;
import com.ssafy.db.repository.NovelTagRepository;
import com.ssafy.db.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service("NovelService")
public class NovelServiceImpl implements NovelService{

    @Autowired
    NovelRepository novelRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    NovelTagRepository novelTagRepository;

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
        return novel;}


    @Override
    public List<Novel> getNovelsByTag(NovelTagSearchReq tagsInfo) {
        List<Novel> shelf = new ArrayList<>();
        //여기 클린코딩 해야 되니까 이렇게 말고 다르게 하는 법 생각해보자
        List<NovelTag> book = new ArrayList<>();
        if (tagsInfo.getTag1() != null){
            book = novelTagRepository.findByTagNo(tagsInfo.getTag1()).get();
            for (NovelTag n : book) {
                if (!shelf.contains(n.getNovel()))
                shelf.add(n.getNovel());
            }
        }

        if (tagsInfo.getTag2() != null){
            book = novelTagRepository.findByTagNo(tagsInfo.getTag2()).get();
            for (NovelTag n : book) {
                if (!shelf.contains(n.getNovel()))
                shelf.add(n.getNovel());
            }
        }
        if (tagsInfo.getTag3() != null){
            book = novelTagRepository.findByTagNo(tagsInfo.getTag3()).get();
            for (NovelTag n : book) {
                if (!shelf.contains(n.getNovel()))
                shelf.add(n.getNovel());
            }
        }
        if (tagsInfo.getTag4() != null){
            book = novelTagRepository.findByTagNo(tagsInfo.getTag4()).get();
            for (NovelTag n : book) {
                if (!shelf.contains(n.getNovel()))
                shelf.add(n.getNovel());
            }
        }
        return shelf;
    }


}
