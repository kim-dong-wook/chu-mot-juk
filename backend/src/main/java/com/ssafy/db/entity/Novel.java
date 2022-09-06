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
    String novelTitle;
    String novelWriter;
    String novelIntro;
    String novelRomanceGuide;
    String novelUrl;
    String novelLink;
    int novelNewest;
    boolean novelIsCompleted;
    String novelThumbnail;
    String novelIntroImage;
    String novelPlatform;

}
