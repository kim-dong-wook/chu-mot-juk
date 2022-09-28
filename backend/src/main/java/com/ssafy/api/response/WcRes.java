package com.ssafy.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("WorldCupResponse")
public class WcRes {
    @ApiModelProperty(name = "월드컵 번호", example = "1")
    Long wcNo;

    @ApiModelProperty(name = "소설 제목", example = "데뷔 못하면 죽는 병")
    float ratio;
}
