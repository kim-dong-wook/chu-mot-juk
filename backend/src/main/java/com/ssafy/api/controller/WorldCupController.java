package com.ssafy.api.controller;

import com.ssafy.api.service.WorldCupService;
import com.ssafy.db.entity.WorldCup;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "WC API", tags = {"WorldCup"})
@RestController
@RequestMapping("/api/wc")
public class WorldCupController {
    @Autowired
    WorldCupService worldCupService;

    @GetMapping("/{wcNo}")
    @ApiOperation(value = "wc no로 캐릭터 조회", notes = "해당 no를 가진 wc 정보를 응답한다.")
    public ResponseEntity<WorldCup> getInfoByNo(
            @PathVariable @ApiParam(value = "wc no", required = true) Long wcNo) {

        return ResponseEntity.status(200).body(worldCupService.getWorldCupInfo(wcNo));
    }


}
