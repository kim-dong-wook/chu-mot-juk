package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;
import org.springframework.transaction.annotation.Transactional;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserRepositorySupport userRepositorySupport;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	@Transactional
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();

		user.setId(userRegisterInfo.getId());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		user.setNickname(userRegisterInfo.getNickname());
		user.setAge(userRegisterInfo.getAge());
		user.setGender(userRegisterInfo.getGender());

		return userRepository.save(user);
	}

	@Override
	public boolean checkUserId(String id) {
		boolean result = userRepositorySupport.findByUserIdEquals(id);
		return result;
	}

	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		User user = userRepositorySupport.findUserById(userId).get();
		return user;
	}

	@Override
	public User getUserByUserNo(Long userNo) {
		User user = userRepositorySupport.findUserByUserNo(userNo).get();
		return user;
	}

	@Override
	@Transactional
	public boolean deleteUser(UserRegisterPostReq userRegisterInfo) {

		boolean success = false;

		try {
			User user = userRepository.findById(userRegisterInfo.getId()).get();
			userRepository.delete(user);
			success = true;
		}catch (Exception e){
			success = false;
		}

		return success;
	}

	@Override
	@Transactional
	public User modifyUser(UserRegisterPostReq userRegisterInfo) {

		User user = userRepository.findById(userRegisterInfo.getId()).get();
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		user.setNickname(userRegisterInfo.getNickname());

		return userRepository.save(user);
	}
}
