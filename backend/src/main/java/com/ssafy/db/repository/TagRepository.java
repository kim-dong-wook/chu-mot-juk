package com.ssafy.db.repository;

import com.ssafy.db.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>  {
    Optional<Tag> findTagByTagName(String tagName);
    Optional<Tag> findTagByTagNo(Long tagNo);
    Optional<Tag> findTagByTagNameAndTagGenre(String tagName, int tagGenre);
    Optional<List<Tag>> findTagsByTagGenre(int tagGenre); // 대분류별 태그 조회
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 0 AND n.tagType = :tagType")
    Optional<List<Tag>> findRomanceTagsByTagType(int tagType); // 로맨스, 로판 내 분류별 태그 조회
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 1 AND n.tagType = :tagType")
    Optional<List<Tag>> findFantasyTagsByTagType(int tagType); // 판타지 내 분류별 태그 조회
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 2 AND n.tagType = :tagType")
    Optional<List<Tag>> findBlTagsByTagType(int tagType); // BL 내 분류별 태그 조회
}
