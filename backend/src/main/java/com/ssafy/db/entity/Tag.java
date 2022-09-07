package com.ssafy.db.entity;

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
    private Long no;

    private int tagType;
    private String tagName;

    @OneToMany(mappedBy = "tag")
    private List<NovelTag> tagNovels = new ArrayList<>();
}
