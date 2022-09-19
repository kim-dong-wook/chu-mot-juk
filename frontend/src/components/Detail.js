import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import './Detail.css';

const Detail = () => {
  return (
    <>
      <div className="header-cover"></div>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[96rem] lg:space-y-16 lg:px-4">
          <section className="w-full max-w-[96rem]  border-2 border-red-600">
            <div className="grid grid-cols-12 gap-5 p-4 m-2">
              <main className="col-span-8 p-4 border-2 border-green-600">
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
                  <div className="flex items-center sm:justify-between">
                    <div className="flex h-24 grow flex-col justify-between sm:h-auto sm:flex-row">
                      <h2 className="truncate text-lg font-bold sm:text-3xl">
                        나 빼고 다 젊은이
                      </h2>

                      <button
                        type="button"
                        className="tx-primary-btn grow-0 px-4 py-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="mr-3 h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                        <span>즐겨찾기 추가</span>
                      </button>
                    </div>
                  </div>

                  <hr className="tx-theme-border hidden sm:my-6 sm:block"></hr>
                  <div className="flex gap-x-6">
                    <img
                      alt="나 빼고 다 젊은이"
                      srcset="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640 2x"
                      src="https://image.txtsoda.com/books/cl7pvr9nr013308mozjmudyan/cover/cover.webp?format=webp&amp;width=640"
                      decoding="async"
                      data-nimg="raw"
                      className="hidden rounded sm:block w-[130%]"
                    ></img>

                    <div className="col-span-2 space-y-4">
                      <ul className="space-x-4 hidden sm:block">
                        <li>이현도</li>
                      </ul>
                      <p style={{ fontSize: '3vw' }}>ㅎ</p>
                      <p style={{ fontSize: '3vw' }}>ㅎ</p>
                      <p style={{ fontSize: '3vw' }}>ㅎ</p>
                      <p style={{ fontSize: '3vw' }}>ㅎ</p>
                      <p style={{ fontSize: '3vw' }}>ㅎ</p>
                      <p>
                        지극히 평범한(?) 할아버지 최춘택. 손녀를 지키기 위해
                        가상현실 게임 ‘아크스타’ 를 시작했다. 그런데 우연히
                        전설의 직업을 얻어버렸다…? “염병하네.”
                      </p>
                      <ul className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3">
                        <li className="">
                          <a
                            target="_self"
                            className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                            href="/searches?tagName=%EB%A8%BC%EC%B9%98%ED%82%A8"
                          >
                            <span className="mr-0.5 font-mono text-xs">#</span>
                            <span className="text-sm">먼치킨</span>
                          </a>
                        </li>
                        <li className="">
                          <a
                            target="_self"
                            className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                            href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EA%B2%8C%EC%9E%84"
                          >
                            <span className="mr-0.5 font-mono text-xs">#</span>
                            <span className="text-sm">장르/판타지/게임</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </main>
              <aside className="col-span-4 md:pt-0 p-2 border-2 border-blue-600">
                <p>추천 grid 아마도 6개?</p>
              </aside>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Detail;
