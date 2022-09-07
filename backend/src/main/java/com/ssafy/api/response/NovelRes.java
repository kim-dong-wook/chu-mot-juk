package com.ssafy.api.response;


import com.ssafy.db.entity.Novel;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class NovelRes{

    public static NovelRes of(Novel novel) {
        NovelRes res = new NovelRes();
        return res;
    }
}