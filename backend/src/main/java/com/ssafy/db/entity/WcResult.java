package com.ssafy.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class WcResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long wcResultNo;

    @Column(nullable = false)
    Long wcNo;

    @Column(nullable = false)
    Long userNo;
}
