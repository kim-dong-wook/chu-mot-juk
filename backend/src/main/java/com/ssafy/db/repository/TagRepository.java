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
    Optional<List<Tag>> findTagByTagGenre(int tagGenre);
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 0 AND n.tagType = :tagType")
    Optional<List<Tag>> findRomanceTagByTagType(int tagType);
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 1 AND n.tagType = :tagType")
    Optional<List<Tag>> findFantasyTagByTagType(int tagType);
    @Query(value = "SELECT n FROM Tag n WHERE n.tagGenre = 2 AND n.tagType = :tagType")
    Optional<List<Tag>> findBlTagByTagType(int tagType);
}
