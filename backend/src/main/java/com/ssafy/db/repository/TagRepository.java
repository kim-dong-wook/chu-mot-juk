package com.ssafy.db.repository;

import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.Tag;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long>  {
    Optional<Long> findTagNoByTagName(String tagName);
}
