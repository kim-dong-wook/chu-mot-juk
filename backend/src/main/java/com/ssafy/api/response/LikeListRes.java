package com.ssafy.api.response;

import com.ssafy.db.entity.Novel;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel("LikeListResponse")
public class LikeListRes {

    @ApiModelProperty(name = "좋아요 리스트 식별자", example = "1")
    Long likeNo;

    @ApiModelProperty(name = "사용자 좋아요 목록 소설", example = "책 정보")
    NovelInfoRes novel;

}
