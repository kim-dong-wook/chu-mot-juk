package com.ssafy.api.controller;

import com.ssafy.api.dto.LikeListDTO;
import com.ssafy.api.request.LikeListReq;
import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.api.request.UserTagReq;
import com.ssafy.api.response.LikeListRes;
import com.ssafy.api.response.NovelInfoRes;
import com.ssafy.api.service.NovelService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.SsafyUserDetails;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.LikeList;
import com.ssafy.db.entity.Tag;
import com.ssafy.db.entity.User;
import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.*;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */
@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    NovelService novelService;

    @PostMapping
    @ApiOperation(value = "회원 가입", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> register(
            @RequestBody @ApiParam(value = "회원가입 정보", required = true) UserRegisterPostReq registerInfo) {

        System.out.println(registerInfo.getId());
        boolean success = userService.checkUserId(registerInfo.getId());

        if (success) {
            userService.createUser(registerInfo);
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
        }
    }

    @GetMapping("/idcheck/{user_id}")
    @ApiOperation(value = "회원 아이디 중복 체크", notes = "회원가입 시 회원 아이디 중복 체크 검사")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> idCheck(@PathVariable("user_id") String userId) {

        boolean success = userService.checkUserId(userId);

        if (success) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            return ResponseEntity.status(401).body(BaseResponseBody.of(401, "fail"));
        }
    }

    @GetMapping("/me")
    @ApiOperation(value = "회원 본인 정보 조회", notes = "로그인한 회원 본인의 정보를 응답한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<User> getUserInfo(@ApiIgnore Authentication authentication) {
        /**
         * 요청 헤더 액세스 토큰이 포함된 경우에만 실행되는 인증 처리이후, 리턴되는 인증 정보 객체(authentication) 통해서 요청한 유저 식별.
         * 액세스 토큰이 없이 요청하는 경우, 403 에러({"error": "Forbidden", "message": "Access Denied"}) 발생.
         */
        SsafyUserDetails userDetails = (SsafyUserDetails) authentication.getDetails();
        String userId = userDetails.getUsername();
        User user = userService.getUserByUserId(userId);

        return ResponseEntity.status(200).body(user);
    }

    @GetMapping("/id/{id}")
    @ApiOperation(value = "아이디로 회원 정보 조회", notes = "해당 아이디를 가진 회원 정보를 응답한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<User> getUserInfoById(
            @PathVariable @ApiParam(value = "회원 아이디", required = true) String id) {
        User user = userService.getUserByUserId(id);

        return ResponseEntity.status(200).body(user);
    }

    @GetMapping("/no/{userNo}")
    @ApiOperation(value = "회원번호로 회원 정보 조회", notes = "회원 식별자를 통해 사용자 정보를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<User> getUserByUserNo(
            @PathVariable @ApiParam(value = "회원 번호", required = true) Long userNo) {
            User user = userService.getUserByUserNo(userNo);
            return ResponseEntity.status(200).body(user);
    }

    @PutMapping
    @ApiOperation(value = "회원 본인 정보 수정", notes = "로그인한 회원 본인의 정보를 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> ModifyUserInfo(
            @RequestBody @ApiParam(value = "회원가입 정보", required = true) UserRegisterPostReq registerInfo) {

        userService.modifyUser(registerInfo);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

    @DeleteMapping
    @ApiOperation(value = "회원 탈퇴", notes = "로그인한 회원 계정을 탈퇴시킨다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "Success"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> deleteUser(
            @RequestBody @ApiParam(value = "회원가입 정보", required = true) UserRegisterPostReq registerInfo) {

        boolean success = userService.deleteUser(registerInfo);

        if (success) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
        }

    }

    @GetMapping("/{userNo}/tags")
    @ApiOperation(value = "유저가 좋아하는 태그 조회", notes = "유저 아이디를 입력 받아 선호하는 태그 목록을 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "좋아하는 태그 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List> getTagsByUserNo
            (@PathVariable @ApiParam(value = "userNo") Long userNo) {
        List<Tag> tagList = userService.getTagsByUserNo(userNo);
        //태그를 받아 올 거임 근데 한 번 클릭하면 추가되게? 아니면 추가된 채로 검색을 누르면 변하게?
        return ResponseEntity.status(200).body(tagList);
    }

    @DeleteMapping("/tags")
    @ApiOperation(value = "유저가 좋아하는 태그 목록에서 태그 삭제", notes = "선호하는 태그 목록에서 특정 태그를 지운다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "해당 태그를 찾을 수 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> deleteTags
            (@RequestBody @ApiParam(value = "회원 정보 및 회원 태그 정보", required = true) UserTagReq userTagInfo) {

        if (userService.deleteTags(userTagInfo) == true)
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        else
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

    @GetMapping("/{userNo}/novels")
    @ApiOperation(value = "유저가 좋아요 한 목록 조회", notes = "유저 아이디를 입력 받아 좋아요 한 목록을 가져온다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "좋아하는 태그 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List> getLikeListByUserNo
            (@PathVariable @ApiParam(value = "userNo") Long userNo) {
        List<LikeListDTO> likeListDTO = userService.getLikeListByUserNo(userNo);

        List<LikeListRes> likeListResList = new ArrayList<>();
        for(int i = 0; i < likeListDTO.size(); i++) {
            LikeListRes likeListRes = new LikeListRes();
            likeListRes.setLikeNo(likeListDTO.get(i).getLikeNo());
            NovelInfoRes novel = novelService.getNovelInfoByNovelNo(likeListDTO.get(i).getNovelNo());
            likeListRes.setNovel(novel);
            likeListResList.add(likeListRes);
        }

        return ResponseEntity.status(200).body(likeListResList);
    }

    @DeleteMapping("/novels")
    @ApiOperation(value = "유저가 좋아요 한 목록에서 책 제외", notes = "좋아요 목록에서 특정 책을 지운다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "권한 없음"),
            @ApiResponse(code = 404, message = "해당 태그를 찾을 수 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> deleteLikeList
            (@RequestBody @ApiParam(value = "회원 정보 및 소설 정보", required = true) LikeListReq likeListInfo) {
        if (userService.deleteLikeList(likeListInfo) == true)
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        else
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Fail"));
    }

}
