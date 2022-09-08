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
    @Column(name = "novel_no")
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
