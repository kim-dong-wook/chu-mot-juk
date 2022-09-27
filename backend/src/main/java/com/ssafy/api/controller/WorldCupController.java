package com.ssafy.api.controller;

import com.ssafy.api.request.WcReq;
import com.ssafy.api.service.WorldCupService;
import com.ssafy.db.entity.WorldCup;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "WC API", tags = {"WorldCup"})
@RestController
@RequestMapping("/api/wc")
public class WorldCupController {
    @Autowired
    WorldCupService worldCupService;

    @PostMapping()
    @ApiOperation(value = "wc 정보 전달", notes = "wc의 모든 정보를 제공한다.")
    public ResponseEntity<List> getWcs() {
        return ResponseEntity.status(200).body(worldCupService.getAllWcInfo());
    }

    @PostMapping("/result")
    @ApiOperation(value = "wc no로 캐릭터 조회", notes = "해당 no를 가진 wc 정보를 응답하고 결과를 저장한다.")
    public ResponseEntity<WorldCup> getInfoByNo(
            @RequestBody @ApiParam(value = "wcReq", required = true) WcReq wcReq) {
        worldCupService.createWcResult(wcReq);
        return ResponseEntity.status(200).body(worldCupService.getWorldCupInfo(wcReq.getWcNo()));
    }


}
