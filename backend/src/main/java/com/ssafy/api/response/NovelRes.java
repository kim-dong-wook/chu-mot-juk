package com.ssafy.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("NovelResponse")
public class NovelRes {

    @ApiModelProperty(name = "소설 식별자", example = "1")
    Long novelNo;

    @ApiModelProperty(name = "소설 제목", example = "데뷔 못하면 죽는 병")
    String novelTitle;

    @ApiModelProperty(name = "소설 썸네일", example = "img.png")
    String novelThumbnail;

    @ApiModelProperty(name = "소설 태그이름 리스트", example = "어쩌고버스")
    List<String> TagNames;

}
