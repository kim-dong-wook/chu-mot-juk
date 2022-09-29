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
    @ApiModelProperty(name = "유형검사 태그", example = "[1, 2, 3, 4]")
    List<Long> tags;
}
