import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { loginState, axiosBasic } from '../stores/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import qs from 'qs';
import {
  CLIENT_ID,
  REDIRECT_URI,
  CLIENT_SECRET,
} from '../components/common/KaKaoAuth';

function KaKao() {
  // const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  // var code = new URL(window.location.href).searchParams.get('code');
  // const navigate = useNavigate();

  // const KakaoRefresh = async () => {
  //   try {
  //     const response = await axiosBasic.post('api/token/refresh', {
  //       refresh: `${localStorage.getItem('refreshtoken')}`,
  //     });
  //     console.log(response.data);
  //     console.log('리프레쉬 성공');

  //     localStorage.removeItem('accesstoken');
  //     localStorage.removeItem('removetoken');
  //     localStorage.setItem('accesstoken', response.data.access);
  //     localStorage.setItem('refreshtoken', response.data.refresh);
  //     setLoggedIn(true);
  //   } catch (e) {
  //     console.log(e);
  //     console.log('리프레쉬 불가');
  //   }
  // };

  // const kakaologin = async () => {
  //   try {
  //     const response = await axiosBasic.post(
  //       `api/auth/kakao/signin/callback?code=${code}`,
  //     );
  //     console.log(response.data);
  //     console.log('로그인 성공');
  //     localStorage.setItem('accesstoken', response.data.token.access);
  //     localStorage.setItem('refreshtoken', response.data.token.refresh);
  //     localStorage.setItem('kakaotoken', response.data.token.kakao);
  //     setLoggedIn(true);

  //     // setInterval(KakaoRefresh, 1000 * 60 * 4);
  //     if (response.data.token.access) {
  //       navigate('/');
  //     }
  //   } catch (e) {
  //     console.log('로그인 불가');
  //   }
  // };

  // useEffect(() => {
  //   kakaologin();
  // }, []);

  //  @@@2번째 참고
  // const [user_id, setUserId] = useState();
  // const [nickName, setNickName] = useState();
  // const [profileImage, setProfileImage] = useState();

  // const getProfile = async () => {
  //   try {
  //     // Kakao SDK API를 이용해 사용자 정보 획득

  //     //  RESTAPI로수정
  //     let data = await window.Kakao.API.request({
  //       url: '/v2/user/me',
  //     });

  //     // 사용자 정보 변수에 저장
  //     setUserId(data.id);
  //     setNickName(data.properties.nickname);
  //     setProfileImage(data.properties.profile_image);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);
  //@@@@3번
  // useEffect(() => {
  //   let params = new URL(document.location.toString()).searchParams;
  //   let code = params.get('code'); // 인가코드 받는 부분
  //   let grant_type = 'authorization_code';
  //   let client_id = '4797f1a9c3b9e85999d864532537f338';

  //   axios
  //     .post(
  //       `https://kauth.kakao.com/oauth/token?
  //       grant_type=${grant_type}
  //       &client_id=${client_id}
  //       &redirect_uri=http://localhost:3000/oauth/kakao/callback
  //       &code=${code}`,
  //       {
  //         headers: {
  //           'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //         },
  //       },
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
  //     })
  //     .catch((err) => {
  //       console.warn('>>> [LOGIN] ❌ ERROR', err.message);
  //     });
  // }, []);

  const code = new URL(window.location.href).searchParams.get('code');

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload,
      );
      // Kakao Javascript SDK 초기화
      window.Kakao.init(CLIENT_ID);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      console.log(code);
      console.log(res.data.access_token);
      // navigate('/mypage');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <div>로딩 중 기다려주세요~~</div>
      {/* <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage}></img> */}
      {/* 로그인에 성공했어요!!/회원가입이 필요해요!! / 로그인 실패! 정보 제공 동의 후 다시 시도해주세요. */}
    </>
  );
}

export default KaKao;
