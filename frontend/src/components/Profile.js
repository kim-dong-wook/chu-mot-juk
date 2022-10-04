import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import {
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../stores/atom';

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
import { data } from 'jquery';

const MyBox = () => {
  // let result8 = await searchUserById('2');
  // console.log(result8.data);
  // let result9 = await searchMe();
  // console.log(result9.data);

  const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  const [gender, setGender] = useRecoilState(genderState); //  'male'
  const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'

  useEffect(() => {}, []);

  const tags = [
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
  ];

  return (
    <>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[80rem] lg:space-y-16">
          <div className="w-full h-full mt-8">
            <div className="text-[30px] mb-4">마이페이지</div>
            <section class="text-gray-600 border-y border-y-primary-2 bg-[#f3f3f3] overflow-hidden">
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">이름</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">{nickName}</div>
                  <button class="mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                    이름변경
                  </button>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex flex-row flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">성별</span>
                </div>
                <div class="justify-between pl-2 border-x-4  border-x-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">{!gender ? '남' : '여'}</div>
                </div>
                <div class="text-center w-64  mb-0    flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">연령대</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">
                    {ageRange}
                    <span class=" text-[30px]">0대</span>
                  </div>
                </div>
              </div>

              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">아이디</span>
                </div>
                <div class="justify-between pl-2 border-x-4 w-[40px] border-x-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">{user_id}</div>
                </div>
                <div class="text-center w-64  mb-0    flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">프로필</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">
                    <img
                      class="w-[45px] rounded-full"
                      alt=""
                      src={profileImage}
                    ></img>
                  </div>
                </div>
              </div>

              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class="my-auto shrink-0 text-[30px]">선호 태그</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div className="inline">
                    {tags.slice(0, 22).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5  whitespace-nowrap rounded-full bg-primary-2 text-[22px] px-3 py-2  m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button class="my-auto shrink-0 max-h-[45px] mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                    유형검사
                  </button>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class="my-auto shrink-0 text-[30px]">
                    모든 태그(토글 한행 hidden) 각각테그들 토글로 위아래
                  </span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div className="inline">
                    {tags.slice(0, 22).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5  whitespace-nowrap rounded-full bg-primary-2 text-[22px] px-3 py-2  m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">로그아웃</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">다음에 또 와주세요!!</div>
                  <a
                    href="http://localhost:3000/logout"
                    class="mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     "
                  >
                    로그아웃
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div style={{}} className=""></div>
        </main>
      </div>
    </>
  );
};

export default MyBox;
