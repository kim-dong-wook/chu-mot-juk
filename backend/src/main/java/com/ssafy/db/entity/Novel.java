package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


/**
 * 소설 모델 정의.
 */

@Getter
@Setter
@Entity
public class Novel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long novelNo;

    private String novelTitle;
    private String novelWriter;
    private String novelIntro;
    private String novelRomanceGuide;
    private String novelUrl;
    private String novelLink;
    private int novelNewest;
    private boolean novelIsCompleted;
    private String novelThumbnail;
    private String novelIntroImage;
    private String novelPlatform;
}
