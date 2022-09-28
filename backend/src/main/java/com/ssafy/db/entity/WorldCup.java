package com.ssafy.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class WorldCup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long wcNo;

    @Column(nullable = false)
    String novelName;

    @Column(nullable = false)
    String chName;

    @Column(nullable = false, length = 6000)
    String novelUrl;

    @Column(nullable = false, length = 6000)
    String pic;

    @Column(nullable = false)
    Long novelNo;
}
