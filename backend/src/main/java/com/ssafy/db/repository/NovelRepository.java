package com.ssafy.db.repository;

import com.ssafy.db.entity.Novel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

/**
 * 소설 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface NovelRepository extends JpaRepository<Novel, Long> {
    Optional<List<Novel>> findNovelsByNovelTitle(String novelTitle);
    Optional<List<Novel>> findNovelsByNovelWriter(String novelWriter);
    Optional<List<Novel>> findNovelsByNovelTag(String tag);
    Optional<Novel> findNovelByNovelNo(int novelNo);

}