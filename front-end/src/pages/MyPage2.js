import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kakaoLogin from '../assets/images/KaKaoLogin.png';
import { genderState, loginState } from '../stores/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchUserInfo, axiosBasic } from '../stores/atom';
import { KAKAO_AUTH_URL } from '../components/common/KaKaoAuth';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const MyPage = () => {
  return (
    <>
      <p>마이 페이지입니다. {}</p>
      <a href={KAKAO_AUTH_URL}>
        <LoginButton2>
          <img alt="" src={kakaoLogin} />
        </LoginButton2>
      </a>
      {/* {isLoggedIn === true ? (
        <>
          <p>{userData.nickname}</p>

          <p top="16px">성별</p>
          <p>{gender ? '남성' : '여성'}</p>

          <p top="16px">이메일</p>
          <p>{userData.email}</p>

          <button onClick={Logout}>로그아웃</button>
        </>
      ) : (
        <>
          <p width="468px">더 나은 서비스를 위해 가입하세요</p>
          <p width="433px">지금 로그인하세요.</p>

          <a href={KAKAO_AUTH_URL}>
            <LoginButton2>
              <img alt="" src={kakaoLogin} />
            </LoginButton2>
          </a>
        </>
      )} */}
    </>
  );
};

export default MyPage;

export const LoginButton2 = styled.button`
  position: absolute;
  background-color: none;
  left: 260px;
  top: 382px;
  cursor: pointer;
  padding: 0;
  padding-bottom: 0;
  border: none;
  height: 68px;
`;
