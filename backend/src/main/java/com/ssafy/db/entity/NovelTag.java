package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
public class NovelTag {
    @Id
    @Column(name = "novel_tag_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="novel_no")
    private Novel novel;

//    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "tag_no")
    private Tag tag;

    public void setNovel(Novel novel) {
        this.novel = novel;
        if (!novel.getNovelTags().contains(this))
            novel.getNovelTags().add(this);
    }

    public void setTag(Tag tag) {
        this.tag = tag;
        if (!tag.getNovelTagList().contains(this))
            tag.getNovelTagList().add(this);
    }

}
