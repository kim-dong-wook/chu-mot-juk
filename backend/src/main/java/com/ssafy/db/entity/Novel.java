package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(nullable = false)
    private String novelIntro;

    private String novelRomanceGuide;

    @Column(nullable = false)
    private String novelLink;

    @Column(nullable = false)
    private int novelNewest;

    @Column(nullable = false)
    private boolean novelIsCompleted;

    @Column(nullable = false)
    private String novelThumbnail;

    private String novelIntroImage;

    @Column(nullable = false)
    private String novelPlatform;

    @JsonIgnore
    @OneToMany(mappedBy = "novel")
    private List<NovelTag> novelTags = new ArrayList<>();

    public void addNovelTag(NovelTag novelTag) {
        this.novelTags.add(novelTag);
        if(novelTag.getNovel() != this) {
            novelTag.setNovel(this);
        }
    }
}
