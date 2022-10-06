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

const KakaoLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState); //recoil 적용
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  const [gender, setGender] = useRecoilState(genderState); //  'male'
  const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'
  const navigate = useNavigate();

  // 진짜 로그아웃 완전 가라로 함 노답
  const getOut = async () => {
    // Kakao SDK API를 이용해 사용자 정보 조회
    try {
      // let data = await window.Kakao.Auth.logout();
      // console.log(data);
      // console.log(window.Kakao.Auth.getAccessToken());
      setIsLoggedIn(false);
      setAgeRange(0);
      setGender(false);
      setUserId('');
      setNickName('');
      setProfileImage('');
      navigate('/mypage');
    } catch (err) {
      console.log(err);
      console.log('Not logged in.');
      setIsLoggedIn(false);
      setAgeRange(0);
      setGender(false);
      setUserId('');
      setNickName('');
      setProfileImage('');
      navigate('/mypage');
    }
  };

  // const getOut = () => {
  //   if (window.Kakao.Auth.getAccessToken()) {
  //     window.Kakao.API.request({
  //       url: '/v1/user/unlink',
  //       success: function (response) {
  //       console.log('a');
  //       console.log(isLoggedIn);
  //       navigate('/mypage');

  //       },
  //       fail: function (error) {
  //         console.log('aa');
  //       },
  //     });
  //     alert('로그아웃이 완료되었습니다.');
  //     window.Kakao.Auth.setAccessToken(undefined);
  //   }
  // };

  // 연결끊기 안됨  새로고침하면 window.Kakao.Auth.getAccessToken() 사라짐

  // const getOut = async () => {
  //   try {
  //     // Kakao SDK API를 이용해 사용자 정보 조회
  //     let data = await window.Kakao.API.request({
  //       url: '/v1/user/unlink',
  //     });
  //     console.log('ㄱㄱ');
  //     console.log(data);
  //     console.log(isLoggedIn);
  //     console.log(ageRange);
  //     console.log(gender);
  //     console.log(user_id);
  //     console.log(nickName);
  //     console.log(profileImage);
  //     setIsLoggedIn(false);
  //     setAgeRange(0);
  //     setGender(false);
  //     setUserId('');
  //     setNickName('');
  //     setProfileImage('');
  //     console.log(isLoggedIn);
  //     console.log(ageRange);
  //     console.log(gender);
  //     console.log(user_id);
  //     console.log(nickName);
  //     console.log(profileImage);
  //     navigate('/mypage');
  //     // alert('카카오 성공')
  //   } catch (err) {
  //     console.log('qq');
  //     console.log(err);
  //     // alert('카카오 로그인 에러?');
  //   }
  // };

  useEffect(() => {
    getOut();
  }, []);

  return (
    <>
      <div>로그아웃 중 잠시만 기다려주세요~~</div>
    </>
  );
};

export default KakaoLogout;
