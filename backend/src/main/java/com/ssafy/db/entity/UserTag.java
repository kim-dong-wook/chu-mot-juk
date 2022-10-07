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
public class UserTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long UserTagNo;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "tag_no")
    private Tag tag;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    public void setTag(Tag tag) {
        this.tag = tag;
        if(!tag.getUserTagList().contains(this)) {
            tag.getUserTagList().add(this);
        }
    }

    public void setUser(User user) {
        this.user = user;
        if(!user.getUserTagList().contains(this)) {
            user.getUserTagList().add(this);
        }
    }

}
