package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("SurveyRequest")
public class SurveyReq {
    @ApiModelProperty(name = "유형검사 태그", example = "[5, 60, 61, 80, 78, 54, 55, 80, 61, 60, 78]")
    List<Long> tags;
}
