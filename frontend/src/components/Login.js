import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kakaoLogin from '../assets/images/KaKaoLogin.png';
// import { genderState, loginState } from '../stores/atom';
// import { useRecoilState, useRecoilValue } from 'recoil';
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

const Login = () => {
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

  //@@@@@@
  const [user_id, setUserId] = useState();
  const [ageRange, setAgeRange] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 조회
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      console.log(data);
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setAgeRange(data.kakao_account.age_range);
      setEmail(data.kakao_account.email);
      setGender(data.kakao_account.gender);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);

      let body = {
        ageGroup: data.kakao_account.age_range,
        gender: data.kakao_account.gender,
        id: data.id,
        nickname: data.properties.nickname,
        password: 'password',
      };

      axiosBasic
        .post('/users', body) //토큰, 추가 정보 전송
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));

      // let result3 = await signIn(
      //   ageRange,
      //   gender,
      //   user_id,
      //   nickName,
      //   'password',
      // );
      // console.log(result3.data);
      // axiosBasic({
      //   method: 'post',
      //   url: '/users',
      //   data: {
      //     id: 'aal',
      //     // nickname: profile.nickname,
      //     // image: profile.profile_image_url,
      //   },
      // })
      //   .then((res) => {
      //     console.log(res);
      //     // history.push("/main/feed");
      //   })
      //   .catch((error) => {
      //     // console.log(error);
      //     console.error(error);
      //     alert('카카오 로그인 에러?');
      //   });
    } catch (err) {
      console.log(err);
      // alert('카카오 로그인 에러?');
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <main class="flex items-center justify-center">
        <div class="mt-[5%] tx-main space-y-8 max-w-[60rem]  grow rounded-md bg-[#f3f3f3] shadow-md">
          <div class="text-center">
            <h2 class=" font-bold text-3xl ">로그인</h2>
            <h3 class="mt-2 text-xl">추못죽에 오신 것을 환영합니다!</h3>
            <img className="m-auto" alt="" src={logo2} />
          </div>

          <div class="mt-2 flex flex-col items-center gap-y-4">
            <a
              href={KAKAO_AUTH_URL}
              onClick={getProfile()}
              type="button"
              class="group flex w-full  max-w-[550px] items-center justify-center rounded py-4 pl-6 hover:shadow-lg bg-[#FEE500]"
              data-provider="kakao"
            >
              <span class="mr-2 group-hover:animate-bounce">
                <span class="bg-[#FEE500] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="32"
                    height="32"
                  >
                    <path
                      d="M15.98 5C9.364 5 4 9.164 4 14.302c0 3.267 2.17 6.138 5.47 7.8l-.912 4.574 5.179-3.236c.754.114 1.516.17 2.279.169 6.619 0 11.984-4.165 11.984-9.307S22.598 5 15.98 5Z"
                      fill="#3A1D1D"
                    ></path>
                  </svg>
                </span>
              </span>
              <span class="text-center text-[24px] text-black">
                카카오 계정으로 로그인하기
              </span>
            </a>
          </div>

          <div class="mt-4 text-center  ">
            <h3 class="mt-2 text-base lg:mt-4 lg:text-xl">
              지금 로그인하고 추못죽에 서비스를 사용해보세요. 최선을 다해
              추천해드려요!! :)
            </h3>
            <h3 class="mt-2 text-base lg:mt-4 lg:text-xl">
              서비스 이용을 위해 이메일과 이름을 수집합니다.
            </h3>
          </div>
        </div>
      </main>

      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <h2>
        {ageRange ? ageRange : ''}|{email}|{gender}
      </h2>

      <img alt="" src={profileImage}></img>
      <a href="https://kauth.kakao.com/oauth/logout?client_id=50ca5e8cf40713abcab868ed9ed3047d&logout_redirect_uri=http%3A%2F%2Fkimcoder.kro.kr%3A8080%2Fhome">
        로그아웃1
      </a>

      <a className="ml-[100px]" href="http://localhost:3000/logout">
        로그아웃2
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

export default Login;

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
