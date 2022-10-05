package com.ssafy.api.dto;

import com.ssafy.api.response.NovelInfoRes;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("LikeListDto")
public class LikeListDTO {
    @ApiModelProperty(name = "좋아요 리스트 식별자", example = "1")
    Long likeNo;

    @ApiModelProperty(name = "사용자 좋아요 목록 소설 식별자", example = "2")
    Long novelNo;
}
