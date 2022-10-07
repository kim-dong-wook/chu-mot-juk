import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import kakaoLogin from '../assets/images/KaKaoLogin.png';
// import { genderState, loginState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import {
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../stores/atom';
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
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState); //Kakao.js 에서 함
  // const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  // const [gender, setGender] = useRecoilState(genderState); //  'male'
  // const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  // const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  // const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'

  // const getProfile = async () => {
  //   try {
  //     // Kakao SDK API를 이용해 사용자 정보 조회
  //     let data = await window.Kakao.API.request({
  //       url: '/v2/user/me',
  //     });
  //     console.log(data);
  //     // 사용자 정보 변수에 저장
  //     setUserId(data.id);
  //     let ageFix1 = data.kakao_account.age_range.substr(0, 2);
  //     let ageFix2 = parseInt(ageFix1 / 10);
  //     setAgeRange(ageFix2);
  //     // setEmail(data.kakao_account.email);
  //     if (data.kakao_account.gender === 'male') {
  //       let genderFix = false; // male => false
  //       setGender(genderFix);
  //     } else {
  //       let genderFix = true; // female => true
  //       setGender(genderFix);
  //     }
  //     setNickName(data.properties.nickname);
  //     setProfileImage(data.properties.profile_image);

  //     let body = {
  //       ageGroup: ageRange,
  //       gender: gender,
  //       id: user_id,
  //       nickname: nickName,
  //       password: 'password', // 카카오에서 안받아옴 그냥 유지
  //     };

  //     console.log(body);
  //     //  다좋은데 console 128(망) > 125(성공) > 126(카) 순서대로 됨 128왜감??
  //     await axiosBasic
  //       .post('/users', body) //토큰, 추가 정보 전송
  //       .then((res) => {
  //         if (res.data) {
  //           console.log(res.data);
  //           console.log('카');
  //         }
  //       })
  //       .catch((err) => console.log(err), console.log('망'));
  //   } catch (err) {
  //     console.log(err);
  //     // alert('카카오 로그인 에러?');
  //   }
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

  return (
    <>
      <div className="min-h-[94vh] pt-[5vh]">
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
                // onClick={getProfile}
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
      </div>
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
