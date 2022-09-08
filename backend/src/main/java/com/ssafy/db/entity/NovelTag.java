package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="tag_no")
    private Tag tag;

    public void setNovel(Novel novel) {
        if (this.novel != null) {
            this.novel.getNovelTags().remove(this);
        }
        this.novel = novel;
        novel.getNovelTags().add(this);
    }

    public void setTag (Tag tag) {
        if (this.tag != null) {
            this.tag.getNovelTags().remove(this);
        }
        this.tag = tag;
        tag.getNovelTags().add(this);
    }
}
