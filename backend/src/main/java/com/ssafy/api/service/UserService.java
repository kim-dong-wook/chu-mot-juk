package com.ssafy.api.service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.Tag;
import com.ssafy.db.entity.User;

import java.util.List;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User createUser(UserRegisterPostReq userRegisterInfo);

	boolean checkUserId(String id);

	User getUserByUserId(String id);

	User getUserByUserNo(Long userNo);

	boolean deleteUser(UserRegisterPostReq userRegisterInfo);

	User modifyUser(UserRegisterPostReq userRegisterInfo);

	List<Tag> getTagsByUserNo(Long userNo);
}
