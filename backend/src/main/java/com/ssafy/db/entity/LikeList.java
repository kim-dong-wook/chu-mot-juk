package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class LikeList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long likeNo;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    @JsonIgnore
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "novel_no")
    private Novel novel;

    public void setUser(User user) {
        this.user = user;
        if(!user.getLikeList().contains(this)) {
            user.getLikeList().add(this);
        }
    }

    public void setNovel(Novel novel) {
        this.novel = novel;
        if(!novel.getLikeList().contains(this)) {
            novel.getLikeList().add(this);
        }
    }

}
