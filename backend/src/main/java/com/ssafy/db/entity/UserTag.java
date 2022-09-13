package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class UserTag {
    @Id
    @Column(name = "user_tag_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long no;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_no")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="tag_no")
    private Tag tag;

    public void setUser (User user) {
        if (this.user != null) {
            this.user.getUserTags().remove(this);
        }
        this.user = user;
        user.getUserTags().add(this);
    }

    public void setTag (Tag tag) {
        if (this.tag != null) {
            this.tag.getUserTags().remove(this);
        }
        this.tag = tag;
        tag.getUserTags().add(this);

    }
}
