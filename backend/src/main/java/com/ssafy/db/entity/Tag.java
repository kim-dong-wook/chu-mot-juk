package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Tag{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagNo;

    @Column(nullable = false)
    private int tagType;

    @Column(nullable = false)
    private String tagName;

    @JsonIgnore
    @OneToMany(mappedBy = "tag")
    private List<NovelTag> novelTags = new ArrayList<>();

    public void addNovelTag(NovelTag novelTag) {
        this.novelTags.add(novelTag);
        if(novelTag.getTag() != this) {
            novelTag.setTag(this);
        }
    }

    @JsonIgnore
    @OneToMany(mappedBy = "tag")
    private List<UserTag> userTags = new ArrayList<>();

    public void addUserTag(UserTag userTag) {
        this.userTags.add(userTag);
        if(userTag.getTag() != this) {
            userTag.setTag(this);
        }
    }
}
