package com.ssafy.api.request;

import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원가입 API ([POST] /api/users) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("UserRegisterPostRequest")
public class UserRegisterPostReq {
	@ApiModelProperty(name="유저 ID", example="id")
	String id;
	@ApiModelProperty(name="유저 Password", example="password")
	String password;
	@ApiModelProperty(name = "유저 Nickname", example = "박문대")
	String nickname;
	@ApiModelProperty(name = "유저 Age", example = "10")
	Integer ageGroup;
	@ApiModelProperty(name = "유저 Gender (0 : 남자, 1: 여자)", example = "0")
	Boolean gender;
}
