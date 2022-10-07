package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("LikeListRequest")
public class LikeListReq {

    @ApiModelProperty(name="유저 번호", example="0")
    Long userNo;

    @ApiModelProperty(name = "소설 번호", example = "0")
    Long novelNo;
}
