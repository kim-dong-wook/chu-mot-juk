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
    private int tagGenre;

    @Column(nullable = false)
    private int tagType;

    @Column(nullable = false)
    private String tagName;

    @JsonIgnore
    @OneToMany(mappedBy = "tag", fetch = FetchType.LAZY)
    List<UserTag> userTagList = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "tag", fetch = FetchType.LAZY)
    List<NovelTag> novelTagList = new ArrayList<>();

    public void addUserTagList(UserTag userTagList) {
        this.userTagList.add(userTagList);
        if(userTagList.getTag() != this) {
            userTagList.setTag(this);
        }
    }

    public void addNovelTagList(NovelTag novelTagList) {
        this.novelTagList.add(novelTagList);
        if(novelTagList.getTag() != this) {
            novelTagList.setTag(this);
        }
    }

}
