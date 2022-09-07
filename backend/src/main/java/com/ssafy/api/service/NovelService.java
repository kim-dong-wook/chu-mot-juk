package com.ssafy.api.service;

import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.db.entity.Novel;

import java.util.List;

/**
 *	소설 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface NovelService {
    //이름으로 찾기
    List<Novel> getNovelsByNovelTitle(String novelTitle);
    //저자로 찾기
    List<Novel> getNovelsByNovelWriter(String novelWriter);

    Novel getNovelInfoByNovelNo(Long no);

    List<Novel> getNovelsByTag(NovelTagSearchReq tagsInfo);
    //태그로 찾기
    //찜 목록에 추가
    //소설 정보 조회
}