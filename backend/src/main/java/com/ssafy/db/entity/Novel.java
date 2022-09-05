package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;


/**
 * 소설 모델 정의.
 */

@Getter
@Setter
@Entity
public class Novel extends BaseEntity{
    String title;
    String writer;
    String intro;
    String romanceGuide;
    String url;
    String link;
    int newest;
    boolean isCompleted;
    String thumbnail;
    String introImage;
    String platform;

}
