package com.ssafy.api.service;

import com.ssafy.api.request.WcReq;
import com.ssafy.api.response.WcRes;
import com.ssafy.common.exception.handler.CustomException;
import com.ssafy.common.exception.handler.ErrorCode;
import com.ssafy.db.entity.WcResult;
import com.ssafy.db.entity.WorldCup;
import com.ssafy.db.repository.WcResultRepository;
import com.ssafy.db.repository.WorldCupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("worldCupService")
@Transactional(readOnly = true)
public class WorldCupService {

    @Autowired
    WorldCupRepository worldCupRepository;

    @Autowired
    WcResultRepository wcResultRepository;

    @Transactional
    public WorldCup getWorldCupInfo(Long wcNo){
        WorldCup wc = worldCupRepository.getWorldCupByWcNo(wcNo).orElseThrow(() -> {
            throw new CustomException(ErrorCode.WC_NOT_FOUND);
        });
        return wc;
    }

    @Transactional
    public WcResult createWcResult(WcReq wcReq) {
        WcResult wcResult = new WcResult();
        wcResult.setWcNo(wcReq.getWcNo());
        wcResult.setUserNo(wcReq.getUserNo());

        return wcResultRepository.save(wcResult);
    }

    @Transactional
    public List<WorldCup> getAllWcInfo(){
        return worldCupRepository.getWorldCups().orElseThrow(() -> {
            throw new CustomException(ErrorCode.WC_NOT_FOUND);
        });
    }

}
