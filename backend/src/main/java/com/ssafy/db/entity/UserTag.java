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

    @OneToOne
    @JoinColumn(name = "tag_no")
    private Tag tag;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_no")
    private User user;

    public void setUser(User user) {
        this.user = user;
        if(!user.getUserTagList().contains(this)) {
            user.getUserTagList().add(this);
        }
    }

}
