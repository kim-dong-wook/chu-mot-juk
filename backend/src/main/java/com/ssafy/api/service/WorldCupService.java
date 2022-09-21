package com.ssafy.api.service;

import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.WorldCup;
import com.ssafy.db.repository.WorldCupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("worldCupService")
@Transactional(readOnly = true)
public class WorldCupService {

    @Autowired
    WorldCupRepository worldCupRepository;

    @Transactional
    public WorldCup getWorldCupInfo(Long wcNo){
        WorldCup wc = worldCupRepository.getWorldCupByWcNo(wcNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.WC_NOT_FOUND);
        });
        return wc;
    }
}
