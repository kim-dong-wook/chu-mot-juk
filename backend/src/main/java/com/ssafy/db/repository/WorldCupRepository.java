package com.ssafy.db.repository;

import com.ssafy.db.entity.WorldCup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorldCupRepository extends JpaRepository<WorldCup, Long> {

    Optional<WorldCup> getWorldCupByWcNo(Long wcNo);
}
