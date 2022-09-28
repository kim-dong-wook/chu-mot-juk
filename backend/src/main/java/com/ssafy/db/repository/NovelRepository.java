package com.ssafy.db.repository;

import com.ssafy.db.entity.Novel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 소설 모델 관련 디비 쿼리 생성을 위한 JPA Query Method 인터페이스 정의.
 */
@Repository
public interface NovelRepository extends JpaRepository<Novel, Long> {
    @Query(value = "SELECT n FROM Novel n WHERE n.novelTitle LIKE %:novelTitle%")
    Optional<List<Novel>> findNovelsByNovelTitle(String novelTitle);
    @Query(value = "SELECT n FROM Novel n WHERE n.novelWriter LIKE %:novelWriter%")
    Optional<List<Novel>> findNovelsByNovelWriter(String novelWriter);
    Optional<Novel> findNovelByNovelNo(Long novelNo);
    Optional<List<Novel>> findNovelsByNovelPlatform(String novelPlatform);
    Optional<Page<Novel>> findNovelsByNovelGenre(Integer novelGenre, Pageable pageable);

}