package com.ssafy.db.repository;

import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.NovelTag;
import com.ssafy.db.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NovelTagRepository extends JpaRepository<NovelTag, Long>  {

    Optional<List<NovelTag>> findNovelTagByTagTagNo(Long tagNo);

    Optional<List<NovelTag>> findNovelTagByNovelNovelNo(Long novelNo);
}
