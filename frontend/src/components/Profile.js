import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import {
  searchBookState,
  tagsState,
  isLoginState,
  LikeTagNoState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
  TagNosState,
} from '../stores/atom';
import { getBooksByGenre, getTagByBigtag } from '../api/API';
import { axiosBasic } from '../api/API2';
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
import TagLists from './tagSearch/TagLists2';

const MyBox = () => {
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  const [gender, setGender] = useRecoilState(genderState); //  'male'
  const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'
  const [userInfo, setUserInfo] = useState('');
  // const [tags, setTags] = useRecoilState(tagsState);
  const [hidden, setHidden] = useState(true);
  const [books, setBooks] = useRecoilState(searchBookState);
  const [loading, setLoading] = useState(true);
  const [genreSeleted, setGenreSeleted] = useState('로맨스');
  // @동
  const [likeTags, setLikeTags] = useRecoilState(LikeTagNoState);
  const [likeTagNos, setLikeTagNos] = useRecoilState(TagNosState);
  const [rTags, setRTags] = useState(null);

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 조회
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      console.log(data);
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      let ageFix1 = data.kakao_account.age_range.substr(0, 2);
      let ageFix2 = parseInt(ageFix1 / 10);
      setAgeRange(ageFix2);
      // setEmail(data.kakao_account.email);
      if (data.kakao_account.gender === 'male') {
        let genderFix = false; // male => false
        setGender(genderFix);
      } else {
        let genderFix = true; // female => true
        setGender(genderFix);
      }
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);

      let body = {
        ageGroup: ageRange,
        gender: gender,
        id: user_id,
        nickname: nickName,
        password: 'password', // 카카오에서 안받아옴 그냥 유지
      };

      console.log(body);

      //@@@@@  프로필 프로필 태그
      const userResult = await searchUserById(data.id);
      setUserInfo(userResult.data);
      // userInfo == userResult.data
      let result7 = await userLikeTag(userResult.data.userNo);
      console.log(result7.data);
      setLikeTags(result7.data);
      let NN = [];
      result7.data.forEach(function (number) {
        NN.push(number.tagNo);
      });
      setLikeTagNos(NN);
      console.log(NN);
      //@@@@@ 프로필 프로필 태그

      //  다좋은데 console 128(망) > 125(성공) > 126(카) 순서대로 됨 128왜감??
      await axiosBasic
        .post('/users', body) //토큰, 추가 정보 전송
        .then((res) => {
          if (res.data) {
            console.log(res.data);
            console.log('카');
          }
        })
        .catch((err) => console.log(err), console.log('망'));
    } catch (err) {
      //@@@@@  프로필 프로필 태그
      const userResult = await searchUserById(user_id);
      setUserInfo(userResult.data);
      // userInfo == userResult.data
      let result7 = await userLikeTag(userResult.data.userNo);
      console.log(result7.data);
      setLikeTags(result7.data);
      let NN = [];
      result7.data.forEach(function (number) {
        NN.push(number.tagNo);
      });
      setLikeTagNos(NN);
      console.log(NN);
      //@@@@@ 프로필 프로필 태그
      console.log(err);
      console.log('망');
      // alert('카카오 로그인 에러?');
    }
  };

  const onClickToggle = () => {
    setHidden(!hidden);
  };
  const onClickReload = () => {
    window.location.reload();
  };

  const onClickGenre = (genre) => {
    const fetchData = async () => {
      setLoading(true);
      if (genre === '로맨스') {
        const result = await getBooksByGenre(0);
        setBooks(result.data);
      } else if (genre === '판타지') {
        const result = await getBooksByGenre(1);
        setBooks(result.data);
      } else if (genre === 'BL') {
        const result = await getBooksByGenre(2);
        setBooks(result.data);
      }
      setLoading(false);
    };
    fetchData();
    console.log(genre);
    setGenreSeleted(genre);
  };
  // const [userInfo, setUserInfo] = useState('');
  // const fetchData1 = async () => {
  //   const userResult = await searchUserById(user_id);
  //   setUserInfo(userResult.data);
  //   // userInfo == userResult.data
  //   let result7 = await userLikeTag(userResult.data.userNo);
  //   console.log(result7.data);
  //   setTags(result7.data);
  // };

  const romanceBigtag = async () => {
    let resultB = await getTagByBigtag(0);
    setRTags(resultB.data);
    // console.log(resultB.data);
    // console.log(rTags);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    getProfile();
    romanceBigtag();
  }, []);

  useEffect(() => {}, [likeTagNos]);

  return (
    <>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[80rem] lg:space-y-16">
          <div className="w-full h-full mt-8">
            {/* <div className="text-[30px] mb-4">마이페이지</div> */}
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
                    {(rTags ? rTags.slice(0, 148) : []).map((tag, index) => (
                      <span
                        id={index}
                        key={index + 100}
                        target="_self"
                        className={`${
                          likeTagNos.indexOf(tag.tagNo) == -1
                            ? 'hidden'
                            : 'visible'
                        }   inline-block items-center mr-0.5  whitespace-nowrap rounded-full bg-primary-2 text-[22px] px-3 py-2 m-2 cursor-default`}
                      >
                        #{tag.tagName}
                      </span>
                    ))}
                  </div>
                  <Link to="/testintro">
                    <button class="my-auto shrink-0 w-[159.234px] max-h-[45px] mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                      유형검사
                    </button>
                  </Link>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class="my-auto shrink-0 text-[30px]">태그 수정</span>
                </div>
                <div class="justify-between pl-[30px] border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div className="w-full h-[3rem] flex justify-between items-center  ">
                    <div className="flex items-center">
                      <div className="flex space-x-4 text-xl text-primary-3 items-end">
                        <div
                          className={`rounded-full  px-[12px] py-[1px] mx-[5px] cursor-pointer ${
                            genreSeleted === '로맨스'
                              ? 'scale-125 bg-primary-2'
                              : 'text-primary-4'
                          }`}
                          onClick={() => onClickGenre('로맨스')}
                        >
                          로맨스/로판
                        </div>
                        <div
                          className={`rounded-full  px-[12px] py-[1px] cursor-pointer ${
                            genreSeleted === '판타지'
                              ? 'scale-125 bg-primary-2'
                              : 'text-primary-4'
                          }`}
                          onClick={() => onClickGenre('판타지')}
                        >
                          판타지
                        </div>
                        <div
                          className={`rounded-full  px-[12px] py-[1px] cursor-pointer ${
                            genreSeleted === 'BL'
                              ? 'scale-125 bg-primary-2'
                              : 'text-primary-4'
                          }`}
                          onClick={() => onClickGenre('BL')}
                        >
                          BL
                        </div>
                      </div>
                    </div>
                    {hidden ? (
                      <button
                        class="my-auto shrink-0 w-[159.234px] max-h-[45px] mr-4 right 
                    text-[24px] text-white bg-primary-2 py-1 px-5 
                       hover:bg-primary-3 "
                        onClick={onClickToggle}
                      >
                        전체 보기
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={onClickReload}
                          class="ml-[200px] rounded-full shrink-0 w-[159.234px] max-h-[45px] mr-4 right text-[24px] text-white bg-primary-4 py-1 px-3    hover:bg-primary-3     "
                        >
                          태그 적용
                        </button>

                        <button
                          class="my-auto shrink-0 w-[159.234px] max-h-[45px] mr-4 right 
                    text-[24px] text-white bg-primary-2 py-1 px-5 
                       hover:bg-primary-3 "
                          onClick={onClickToggle}
                        >
                          숨기기
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  hidden ? 'hidden' : ''
                } my-8 space-y-8 h-[24rem] overflow-y-scroll pr-4`}
                style={{ padding: '0px 55px 0px 66px' }}
              >
                <TagLists genre={genreSeleted}></TagLists>
              </div>

              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">연결 끊기</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">다음에 또 봐요!!</div>
                  <Link to="/end">
                    <button
                      class="my-auto shrink-0 w-[159.234px] max-h-[45px] mr-4 right 
                    text-[24px] text-white bg-primary-2 py-1 px-5 
                       hover:bg-primary-3 "
                    >
                      연결 끊기
                    </button>
                  </Link>
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
