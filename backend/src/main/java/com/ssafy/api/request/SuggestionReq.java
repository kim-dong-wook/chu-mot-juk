package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("SuggestionRequest")
public class SuggestionReq {

    @ApiModelProperty(name="연령대", example="1")
    Integer ageGroup;

    @ApiModelProperty(name = "성별", example = "남자 : 0, 여자 : 1")
    boolean gender;
}