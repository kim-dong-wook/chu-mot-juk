package com.ssafy.db.repository;

import com.ssafy.db.entity.UserTag;
import com.ssafy.db.entity.WcResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WcResultRepository extends JpaRepository<WcResult, Long> {


}
