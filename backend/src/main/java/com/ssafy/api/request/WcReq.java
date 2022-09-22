package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("WorldCupRequest")
public class WcReq {

    @ApiModelProperty(name="유저 번호", example="0")
    Long userNo;

    @ApiModelProperty(name = "우승 캐릭터 번호", example = "0")
    Long wcNo;
}
