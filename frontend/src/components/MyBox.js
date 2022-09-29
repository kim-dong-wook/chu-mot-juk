import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';

const MyBox = () => {
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
            <div className="text-[30px] mb-4">
              보관함 하트 좋아요on off 추가해야됨 grid형식이랑
            </div>
            <div className="text-[30px] mb-4">박문대님의 선호작품(찜)!</div>

            <div className="w-full ">
              <div className="flex w-full h-[30.1rem] justify-between flex-wrap my-4">
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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
                <div className="w-[18%] h-[100%] overflow-hidden">
                  <img
                    src="https://via.placeholder.com/485x670"
                    alt=""
                    className="w-full h-[66%] rounded-xl"
                  ></img>
                  <div className="text-lg w-[5rem] bookName my-2">
                    책이름책이름
                  </div>
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

export default MyBox;
