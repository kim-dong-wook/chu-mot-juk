package com.ssafy.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.api.request.NovelTagSearchReq;
import com.ssafy.db.entity.Novel;
import com.ssafy.db.entity.QNovel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class NovelRepositorySupport {

//
//    @Autowired
//    private JPAQueryFactory jpaQueryFactory;
//
//    QNovel qNovel = QNovel.novel;


//    public Optional<Novel> findNovelByNobleTitle(String novelTitle) {
//        Novel novel = jpaQueryFactory.select();
//        if (novel == null) return Optional.empty();
//        return Optional.ofNullable(novel);
//    }
}
