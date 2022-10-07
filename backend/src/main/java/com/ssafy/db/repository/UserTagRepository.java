package com.ssafy.db.repository;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserTagRepository extends JpaRepository<UserTag, Long> {

    Optional<List<UserTag>> findUserTagByUserUserNo(Long userNo);

    Optional<UserTag> findUserTagByUserUserNoAndTagTagNo(Long userNo, Long tagNo);

}
