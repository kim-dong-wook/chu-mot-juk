package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

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
    @OneToOne(mappedBy = "tag")
    UserTag userTagList;

    @JsonIgnore
    @OneToOne(mappedBy = "tag")
    UserTag novelTagList;

}
