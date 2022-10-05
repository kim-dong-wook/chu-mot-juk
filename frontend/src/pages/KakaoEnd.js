import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../stores/atom';
import { axiosBasic } from '../api/API2';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const KakaoEnd = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState); //recoil 적용
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  const [gender, setGender] = useRecoilState(genderState); //  'male'
  const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'
  const navigate = useNavigate();

  // 연결끊기 안됨  새로고침하면 window.Kakao.Auth.getAccessToken() 사라짐

  const getOut = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 조회
      let data = await window.Kakao.API.request({
        url: '/v1/user/unlink',
      });
      console.log('ㄱㄱ');
      console.log(data);

      setIsLoggedIn(false);
      setAgeRange(0);
      setGender(false);
      setUserId('');
      setNickName('');
      setProfileImage('');

      navigate('/mypage');
      // alert('카카오 성공')
    } catch (err) {
      console.log('qq');
      console.log(err);
      setIsLoggedIn(false);
      setAgeRange(0);
      setGender(false);
      setUserId('');
      setNickName('');
      setProfileImage('');

      navigate('/mypage');
      // alert('카카오 로그인 에러?');
    }
  };

  useEffect(() => {
    getOut();
  }, []);

  return (
    <>
      <div>연결끊기 중 잠시만 기다려주세요~~</div>
    </>
  );
};

export default KakaoEnd;
