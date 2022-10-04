import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kakaoLogin from '../assets/images/KaKaoLogin.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import logo2 from '../assets/images/logo2.png';
import {
  CLIENT_ID,
  REDIRECT_URI,
  LOGOUT_REDIRECT_URI,
  CLIENT_SECRET,
  KAKAO_AUTH_URL,
} from '../components/common/KaKaoAuth';
import { axiosBasic } from '../api/API2';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import {
  getBook,
  getBooksByTag,
  signIn,
  fixSignIn,
  deleteSignIn,
  userLikeBook,
  userLikeTag,
  searchUserById,
  searchMe,
  searchUserByUserNo,
  exceptUserLikeBook,
  exceptUserLiketag,
} from '../api/API2';
import { isLoginState } from '../stores/atom';

const KakaoLogout = () => {
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoginState); //recoil 적용

  const navigate = useNavigate();

  // const getOut = () => {
  //   if (window.Kakao.Auth.getAccessToken()) {
  //     window.Kakao.API.request({
  //       url: '/v1/user/unlink',
  //       success: function (response) {
  //         console.log('a');
  //       },
  //       fail: function (error) {
  //         console.log('aa');
  //       },
  //     });
  //     alert('로그아웃이 완료되었습니다.');
  //     window.Kakao.Auth.setAccessToken(undefined);
  //   }
  // };
  setLoggedIn(false);
  console.log(isLoggedIn);

  const getOut = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 조회
      let data = await window.Kakao.API.request({
        url: '/v1/user/unlink',
      });
      console.log('ㄱㄱ');
      console.log(data);
      // alert('카카오 성공')
    } catch (err) {
      console.log('qq');
      console.log(err);
      // alert('카카오 로그인 에러?');
    }
  };

  useEffect(() => {
    getOut();
  }, []);

  return (
    <>
      <div>연결끊기 중 기다려주세요~~</div>
    </>
  );
};

export default KakaoLogout;
