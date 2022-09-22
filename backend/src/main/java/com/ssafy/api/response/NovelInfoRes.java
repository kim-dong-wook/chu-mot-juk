package com.ssafy.api.response;

import com.ssafy.db.entity.Tag;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel("NovelInfoResponse")
public class NovelInfoRes {

    @ApiModelProperty(name = "소설 식별자", example = "1")
    Long novelNo;

    @ApiModelProperty(name = "소설 제목", example = "데뷔 못하면 죽는 병")
    String novelTitle;

    @ApiModelProperty(name = "소설 작가", example = "김동욱")
    String novelWriter;

    @ApiModelProperty(name = "소설 대분류 (0 - 로맨스, 로판 / 1 - 판타지 / 2 - BL)", example = "0")
    int novelGenre;

    @ApiModelProperty(name = "소설 소개", example = "어쩌고 저쩌고 줄바꿈 태그 어쩌고 저쩌고")
    String novelIntro;

    @ApiModelProperty(name = "소설 소개 이미지", example = "image.jpg")
    String novelIntroImage;

    @ApiModelProperty(name = "소설 완결 여부", example = "1")
    boolean novelCompleted;

    @ApiModelProperty(name = "소설 링크", example = "https://ridibooks.com/romance/webnovel")
    String novelLink;

    @ApiModelProperty(name = "소설 최신 회차", example = "99")
    int novelNewest;

    @ApiModelProperty(name = "소설 썸네일", example = "img.png")
    String novelThumbnail;

    @ApiModelProperty(name = "소설 플랫폼 (리디북스, 카카오페이지, 네이버시리즈)", example = "리디북스")
    String novelPlatform;

    @ApiModelProperty(name = "소설 로맨스 가이드 (사용 권장 X)", example = "#어쩌고버스")
    String novelRomanceGuide;

    @ApiModelProperty(name = "소설 태그이름 리스트", example = "어쩌고버스")
    List<String> TagNames;

}
