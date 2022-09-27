package com.ssafy.db.repository;

import com.ssafy.db.entity.LikeList;
import com.ssafy.db.entity.UserTag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeListRepository extends JpaRepository<LikeList, Long> {

    Optional<List<LikeList>> findLikeListsByUserUserNo(Long userNo);

    Optional<LikeList> findLikeListByUserUserNoAndNovelNovelNo(Long userNo, Long novelNo);

}
