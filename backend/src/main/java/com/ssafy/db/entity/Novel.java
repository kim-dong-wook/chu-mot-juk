package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.graalvm.compiler.lir.CompositeValue;

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

    @Column(nullable = false)
    private String novelTitle;

    @Column(nullable = false)
    private String novelWriter;

    @Column(nullable = false, length = 6000)
    private String novelIntro;

    @Column(nullable = false)
    private int novelGenre;

    @Column(length = 6000)
    private String novelRomanceGuide;

    @Column(nullable = false)
    private String novelLink;

    @Column(nullable = false)
    private int novelNewest;

    @Column(nullable = false)
    private boolean novelIsCompleted;

    @Column(nullable = false, length = 1000)
    private String novelThumbnail;

    @Column
    private String novelIntroImage;

    @Column(nullable = false)
    private String novelPlatform;

    @JsonIgnore
    @OneToMany(mappedBy = "novel")
    private List<NovelTag> novelTags = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "novel")
    private List<LikeList> likeList = new ArrayList<>();

    public void addNovelTag(NovelTag novelTag) {
        this.novelTags.add(novelTag);
        if(novelTag.getNovel() != this) {
            novelTag.setNovel(this);
        }
    }

    public void addLikeList(LikeList likeList) {
        this.likeList.add(likeList);
        if(likeList.getNovel() != this) {
            likeList.setNovel(this);
        }
    }
}
