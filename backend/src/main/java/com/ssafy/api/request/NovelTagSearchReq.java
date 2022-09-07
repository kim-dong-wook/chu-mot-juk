package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("NovelTagSearchRequest")
public class NovelTagSearchReq {
    @ApiModelProperty(name="tag1", example="1")
    Long tag1;
    @ApiModelProperty(name="tag2", example="2")
    Long tag2;
    @ApiModelProperty(name="tag3", example="3")
    Long tag3;
    @ApiModelProperty(name="tag4", example="4")
    Long tag4;
}
