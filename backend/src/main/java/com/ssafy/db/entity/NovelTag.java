package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class NovelTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no ;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="novel_no")
    private Novel novel;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="tag_no")
    private Tag tag;
}
