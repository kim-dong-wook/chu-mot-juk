package com.ssafy.db.repository;

import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.Tag;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>  {
    Optional<Tag> findTagByTagName(String tagName);
    Optional<Tag> findTagByTagNo(Long tagNo);
    Optional<Tag> findTagByTagNameAndTagGenre(String tagName, int tagGenre);
}
