import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import {
  searchBookState,
  tagsState,
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../stores/atom';
import { useParams } from 'react-router-dom';

import './Detail.css';
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
import { getBooksByTags, postUserBook } from '../api/API';
import { books } from '../stores/books';
import Temp from './Carousel/test/Temp';
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// <Link to={`/movie/${novelNo}`}>{title}</Link>

const Detail = () => {
  const onClick = async () => {
    // ageGroup: 1  gender: false  id: "2" nickname:
    // "www"  userNo: 2 password: "1234"
    // let result1 = await getBook(1);
    // console.log(result1.data);
    // let result2 = await getBooksByTag([1, 2, 3]);
    // console.log(result2.data);
    // 됨 1 2 3 8 10
    // 이름만됨 4
    // 나머지 아직모름
    // let result3 = await signIn(10, false, '2', 'jmj', '1234');
    // console.log(result3.data);
    // let result4 = await fixSignIn(20, true, '2', 'www', '1234');
    // console.log(result4.data);
    // let result5 = await deleteSignIn(10, false, '2', 'www', '1234');
    // console.log(result5.data);
    // let result6 = await userLikeBook(10, 0, '2', 'jmj', '1234');
    // console.log(result6.data);
    // let result7 = await userLikeTag(10, 0, '2', 'jmj', '1234');
    // console.log(result7.data);
    // let result8 = await searchUserById('2');
    // console.log(result8.data);
    // let result9 = await searchMe();
    // console.log(result9.data);
    // let result10 = await searchUserByUserNo(3);
    // console.log(result10.data);
    // let result11 = await exceptUserLikeBook(10, 3);
    // console.log(result11.data);
    // let result12 = await exceptUserLiketag(10, 3);
    // console.log(result12.data);
  };

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

  const { novelNo } = useParams();
  const [book, setBook] = useState('');
  const [tagsss, setTags] = useState('');
  const getDeBook = async () => {
    let result1 = await getBook(novelNo);
    console.log(result1.data);
    setBook(result1.data);
  };

  // 디테일 테크 #현대물이 숫자 몇인지 ???
  // 1번 백엔드에 물어봐서 if문으로 연결하기
  const getTags = async () => {
    let result2 = await getBooksByTags([1, 2, 3]);
    console.log(result2.data);
    setTags(result2.data);
  };

  // 지금 디테일 좋아하는지 표시
  const [user_id, setUserId] = useRecoilState(userIdState);
  const [userInfo, setUserInfo] = useState(null);
  const fetchData = async () => {
    const userResult = await searchUserById(user_id);
    setUserInfo(userResult.data);
    // userInfo.userNo => 2504 예시
    let result1 = await userLikeBook(userInfo.userNo);
    // 목록들 가져와서 내가 좋아요한 책인지 확인 한값 useState로
  };

  const [like, setLike] = useState(false);
  const onClickLike = async () => {
    await postUserBook(novelNo, userInfo.userNo);
    setLike(!like);
  };
  const onClickDisLike = async () => {
    await exceptUserLikeBook(novelNo, userInfo.userNo);
    setLike(!like);
  };

  const navigate = useNavigate();
  const onClickBook = (novelNo10) => {
    navigate('/detail/' + novelNo10);
  };

  useEffect(() => {
    getDeBook();
    getTags();
    fetchData();
  }, []);

  return (
    <>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[80rem] lg:space-y-16">
          <section className="w-full max-w-[80rem]  border-2border-red-600">
            <div className="grid grid-cols-12 gap-4   ">
              <main className="col-span-8   border-2border-green-600">
                {/* <div
                  className="tx-popover-panel"
                  id="headlessui-popover-panel-:ru:"
                  tabindex="-1"
                  style={{
                    top: '72px',
                    left: '-359.344px',
                  }}
                > */}
                <div className="tx-popover-content">
                  <div className="flex items-center justify-between"></div>

                  <div className="flex gap-x-4">
                    <div className="flex-col w-[98%] ">
                      <div className="rounded   h-[517px] overflow-hidden">
                        <img
                          onClick={onClick}
                          alt="Thumbnail"
                          // srcset="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640 2x"
                          // src="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640"
                          src={book.novelThumbnail}
                          decoding="async"
                          data-nimg="raw"
                          className="  block w-[55vw]"
                        ></img>
                      </div>
                      <div class="flex justify-center">
                        {!like ? (
                          <button
                            onClick={onClickLike}
                            type="button"
                            class="cursor-pointer mt-[0.5vw] w-[100%] pl-[30%] h-[57.59px] text-[32px] inline-flex  text-center items-center  py-2  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-primary-2 rounded-md shadow  hover:bg-primary-1"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-10 h-10"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                              />
                            </svg>
                            좋아요
                          </button>
                        ) : (
                          <button
                            onClick={onClickDisLike}
                            type="button"
                            class="cursor-pointer mt-[0.5vw] w-[100%] pl-[30%] h-[57.59px] text-[32px] inline-flex  text-center items-center  py-2  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-primary-2 rounded-md shadow  hover:bg-primary-1"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-10 h-10"
                            >
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>{' '}
                            좋아요
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between flex-col max-w-[465px] space-y-4">
                      <p className="px-[4px]" style={{ fontSize: '38px' }}>
                        {book.novelTitle}
                      </p>
                      <p className="px-[4px]" style={{ fontSize: '23px' }}>
                        {book.novelWriter}
                        <span class="text-[#686868]"> 저자</span>
                      </p>
                      <p className="px-[4px]" style={{ fontSize: '23px' }}>
                        {book.novelPlatform}
                        <span class="text-[#686868]"> 출판사</span>
                      </p>
                      <p className="px-[4px]" style={{ fontSize: '23px' }}>
                        총 {book.novelNewest}화 |
                        <span class="text-[#686868]">
                          {book.novelCompleted ? ' 완결' : ' 미완결'}
                        </span>
                      </p>

                      {/* <hr className="border-2 border-primary-2 bg-primary-2  "></hr> */}
                      <p className="px-[8px] ">
                        {book ? book.novelIntro.slice(0, 111) : []}...
                      </p>
                      <div className="inline">
                        {(book ? book.tagNames.slice(0, 14) : []).map(
                          (tag, index) => (
                            <span
                              id={index}
                              target="_self"
                              className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
                            >
                              #{tag}
                            </span>
                          ),
                        )}
                      </div>
                      <div class="flex justify-center">
                        <a
                          type="button"
                          class=" cursor-pointer pt-[14px] w-[96%] h-[57.59px] text-[32px] text-center items-center  py-2  font-semibold leading-6 text-white transition duration-150 ease-in-out bg-primary-2 rounded-md shadow  hover:bg-primary-1"
                          disabled=""
                          href={book.novelLink}
                        >
                          작품 보러 가기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </main>
              <aside className="col-span-4    border-2border-blue-600">
                <p>댓글 관련 그 어떤것? 통계 면 이상형월드컵이랑 비슷?</p>
                <p>??????????</p>
                <Temp></Temp>
              </aside>
            </div>
          </section>

          <div className="w-full h-full mt-8">
            {/* /api/novel/search/tags 백엔드 여기에 테크정보 필요 아니면 밑에
              10개처럼 여기서는 개별작품테그 안보주기 ?추천알고리즘 보고결정? */}
            <div className="text-[20px] mb-4">관련 추천 소설</div>
            <div className="w-full ">
              <div className="flex w-full  justify-between flex-wrap my-4">
                {(tagsss ? tagsss.slice(0, 10) : []).map((book, index) => (
                  <div className="w-[18%] h-[100%] ">
                    <img
                      src={book.novelThumbnail}
                      alt=""
                      className="w-full h-[350px] rounded-xl cursor-pointer hover:scale-125 duration-200"
                      onClick={() => onClickBook(book.novelNo)}
                    ></img>
                    <div className="text-lg w-full bookName mt-2 mb-3 h-10">
                      {book.novelTitle}
                    </div>
                    {/* <div className="inline"></div> */}
                  </div>
                ))}
              </div>

              {/*   tagSearch  가져온거   
    <div className="flex w-full h-[30.1rem] justify-between my-4">
      {books.map((book) => (
        <div className="w-[18%] h-[100%] overflow-hidden">
          <img
            src={book.src}
            alt=""
            className="w-full h-[66%] rounded-xl"
          ></img>
          <div className="text-lg w-[5rem] bookName my-2">{book.name}</div>
          <div className="inline">
            {tags.slice(0, 5).map((tag, index) => (
              <span
                id={index}
                target="_self"
                className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Detail;
