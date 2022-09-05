package com.ssafy.api.controller;

import com.ssafy.api.service.NovelService;
import com.ssafy.db.entity.Novel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.response.UserRes;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import springfox.documentation.annotations.ApiIgnore;

/**
 * 소설 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "소설 API", tags = {"Novel"})
@RestController
@RequestMapping("/novel")
public class NovelController {

    @Autowired
    NovelService novelService;

    //소설의 모든 리스트 불러오기


    @GetMapping("/{novelNo}")
    @ApiOperation(value = "소설 정보 조회", notes = "소설의 정보를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "해당 소설 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Novel> getNovelInfo(@RequestParam String novelNo) {
        /**
         * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
         * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
         */
        Novel novel = novelService.getNovelInfo(novelNo);

        return ResponseEntity.status(200).body(novel);
    }
}
