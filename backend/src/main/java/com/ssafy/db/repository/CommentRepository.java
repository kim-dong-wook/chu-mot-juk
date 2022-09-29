package com.ssafy.db.repository;

import com.ssafy.db.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    @Query(value = "select distinct c.keyword from Comment c where c.novelNo = :novelNo")
    Optional<String> findKeywordByNovelNo(Long novelNo);
}
