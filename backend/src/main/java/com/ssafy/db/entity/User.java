package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userNo;

    @Column(nullable = false)
    String id;

    @Column(nullable = false)
    String nickname;

    @Column(nullable = false)
    String age;

    @Column(nullable = false)
    Integer gender;

    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String password;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<UserTag> userTags = new ArrayList<>();

    public void addUserTag(UserTag userTag) {
        this.userTags.add(userTag);
        if(userTag.getUser() != this) {
            userTag.setUser(this);
        }
    }
}
