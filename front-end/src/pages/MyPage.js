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
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState); //recoil 적용
  // const gender = useRecoilValue(genderState);
  // const access = localStorage.getItem('accesstoken');
  // const [userData, setuserData] = useState(null);
  // const navigate = useNavigate();

  // function Logout() {
  //   axiosBasic
  //     .post(
  //       'https://api.found-er.co.kr/api/auth/kakao/signout',
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.accesstoken}`,
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       console.log('로그아웃 완료');
  //       setIsLoggedIn(false);
  //       localStorage.clear();
  //       navigate('/');
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       console.log(error.response.data);
  //       console.log('로그아웃 실패');
  //     });
  // }

  // useEffect(() => {
  //   fetchUserInfo({ setuserData, access });
  // }, [access]);

  // if (!userData && isLoggedIn) return null;

  var wallertAddress;
  var totalReceived;
  var key;
  var txIDarrary = null;
  var txID = null;
  function api(code) {
    var grant_type = 'authorization_code';
    var client_id = '4797f1a9c3b9e85999d864532537f338';
    var redirect_uri = 'http://localhost:3000/oauth/kakao/callback';
    var code = code;
    $.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: grant_type,
        client_id: client_id,
        redirect_uri: redirect_uri,
        code: code,
      },
      function (data) {
        // var access_token = data['access_token'];
        // detectFunction(access_token);  });

        var access_token = data['access_token'];
        $('body').append(access_token + '<BR>');
        $('body').append('access_token:success | Loading...<BR>');
        tokenFunction(access_token);
      },
    );
  }

  var tokenRequest = new XMLHttpRequest();
  function tokenFunction(access_token) {
    var access_token = access_token;
    tokenRequest.open(
      'POST',
      '../tokenFervlet?access_token=' + access_token,
      true,
    );
    tokenRequest.onreadystatechange = tokenProcess;
    tokenRequest.send(null);
  }

  function tokenProcess() {
    if (tokenRequest.readyState == 4 && tokenRequest.status == 200) {
      var result = tokenRequest.responseText;
      if (result == 1) {
        // "location.href"
        alert('로그인 페이지로 이동');
      } else {
        alert('회원가입이동');
      }
    }
  }

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
