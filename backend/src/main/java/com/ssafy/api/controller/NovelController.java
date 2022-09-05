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
import retrofit2.http.Path;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

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
            @ApiResponse(code = 404, message = "해당하는 소설 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Novel> getNovelInfo(@PathVariable("novelNo") int novelNo) {
        Novel novel = novelService.getNovelInfoByNovelNo(novelNo);
        return ResponseEntity.status(200).body(novel);
    }

    @GetMapping("/{novelWriter}")
    @ApiOperation(value = "작가로 소설 조회", notes = "작가가 작성한 소설을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "해당 작가의 이름이 틀렸거나, 해당하는 소설 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Novel>> getNovelsByWriter(@PathVariable("novelWriter") String novelWriter) {
        List<Novel> shelf = novelService.getNovelsByNovelWriter(novelWriter);
        return ResponseEntity.status(200).body(shelf);
    }

    @GetMapping("/{novelTitle}")
    @ApiOperation(value = "제목으로 소설 조회", notes = "제목을 입력하여 소설을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "해당 제목의 소설 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<Novel>> getNovelsByTitle(@PathVariable("novelTitle") String novelTitle) {
        List<Novel> shelf = novelService.getNovelsByNovelTitle(novelTitle);
        return ResponseEntity.status(200).body(shelf);
    }

//    @GetMapping("/")
//    @ApiOperation(value = "태그로 소설 조회", notes = "태그를 입력받아 소설을 조회한다.")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 401, message = "권한 없음"),
//            @ApiResponse(code = 404, message = "해당 태그의 소설 없음"),
//            @ApiResponse(code = 500, message = "서버 오류")
//    })
//    public ResponseEntity<List<Novel>> getNovelsByTags(@RequestBody ) {
//        List<Novel> shelf = ;
//        //태그를 받아 올 거임 근데 한 번 클릭하면 추가되게? 아니면 추가된 채로 검색을 누르면 변하게?
//        return ResponseEntity.status(200).body(shelf);
//    }
}
