package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserTagRequest")
public class UserTagReq {

    @ApiModelProperty(name="유저 번호", example="0")
    Long userNo;

    @ApiModelProperty(name = "태그 번호", example = "0")
    Long tagNo;
}
