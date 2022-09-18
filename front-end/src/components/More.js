import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import './More.css';

const More = () => {
  // Name
  return (
    <>
      <div className="header-cover"></div>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[96rem] lg:space-y-16 lg:px-4">
          <div className="sticky top-16 z-10 bg-white ">
            <form>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 lg:h-6 lg:w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                name="keyword"
                className="block w-full rounded-none border-b border-b-gray-500 bg-white py-3 pl-8 pr-3 text-xl placeholder-gray-500 focus:outline-none lg:py-6 lg:pl-10"
                placeholder="검색어를 입력하세요"
                type="search"
                value=""
              ></input>
            </form>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="mb-4 flex items-end justify-between lg:mb-6 mb-0 lg:mb-0">
                <h1 className="text-xl font-bold lg:text-2xl">추천검색어</h1>
              </div>
              <button type="button" className="inline-flex items-center">
                <span>전체보기</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3">
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%84%B8%EA%B3%84%EA%B4%80%2F%EB%AC%B4%EB%A6%BC"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">세계관/무림</span>
                </a>
              </li>
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%9E%AC%EB%B2%8C"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">소재/재벌</span>
                </a>
              </li>
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">역사/조선</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl"># 역사</h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3">
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EA%B3%A0%EB%A0%A4"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">고려</span>
                </a>
              </li>
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EB%8F%99%EC%96%91"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">동양</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl"># 역사/조선</h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3">
              <li className="">
                <a
                  target="_self"
                  className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                  href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0%2F%ED%9A%A8%EC%A2%85"
                >
                  <span className="mr-0.5 font-mono text-xs">#</span>
                  <span className="text-sm">효종</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:max-w-6xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              <a
                target="_self"
                className="text-blue-600 underline"
                href="/searches?tagName=%EC%97%AD%EC%82%AC"
              >
                역사
              </a>{' '}
              / 조선
            </h2>

            <p className="my-4 text-gray-500">총 10개의 작품이 있습니다.</p>
            <div className="hidden lg:grid lg:gap-y-6 lg:mb-16 lg:grid-cols-4 lg:gap-x-8">
              <div className="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  className="block overflow-clip rounded-md"
                  href="/books/cl1ukrahj2233a66kao7dy2sn/start"
                >
                  <img
                    alt="다시 일어나는 대한"
                    src="https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    className="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                </a>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        className="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrahj2233a66kao7dy2sn/start"
                      >
                        다시 일어나는 대한
                      </a>
                    </h3>
                    <ul className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li className="">
                        <a
                          target="_self"
                          className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span className="mr-0.5 font-mono text-xs">#</span>
                          <span className="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          target="_self"
                          className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span className="mr-0.5 font-mono text-xs">#</span>
                          <span className="text-sm">한국</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          target="_self"
                          className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                        >
                          <span className="mr-0.5 font-mono text-xs">#</span>
                          <span className="text-sm">경영</span>
                        </a>
                      </li>
                      <li className="">
                        <a
                          target="_self"
                          className="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">차원이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">전쟁</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">시간이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EA%B5%B0%EB%8C%80"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">군대</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrai12294a66kfnj6fo7u/start"
                >
                  <img
                    alt="나는 제국익문사였다"
                    src="https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrai12294a66kfnj6fo7u/start"
                      >
                        나는 제국익문사였다
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%98%81%EC%9B%85"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">영웅</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%B5%9C%EA%B0%95%EC%9E%90"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">최강자</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">전쟁</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">시간이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%9D%BC%EC%A0%9C%EA%B0%95%EC%A0%90%EA%B8%B0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">일제강점기</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrak12593a66kzg6w8sgc/start"
                >
                  <img
                    alt="요동왕"
                    src="https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrak12593a66kzg6w8sgc/start"
                      >
                        요동왕
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EB%A7%88%EB%B2%95"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">마법</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EB%A8%BC%EC%B9%98%ED%82%A8"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">먼치킨</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">차원이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">전쟁</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EA%B7%80%ED%99%98"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">귀환</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EB%AC%B4%EC%97%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">무역</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrav64114a66k796qhy0t/start"
                >
                  <img
                    alt="역적조련사 : 조선을 바꾸다"
                    src="https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrav64114a66k796qhy0t/start"
                      >
                        역적조련사 : 조선을 바꾸다
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%9A%8C%EA%B7%80"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">회귀</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">귀족</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">경영</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukraxe4429a66kjdit7x4e/start"
                >
                  <img
                    alt="조선혁명군주"
                    src="https://image.txtsoda.com/books/cl1ukraxe4429a66kjdit7x4e/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukraxe4429a66kjdit7x4e/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukraxe4429a66kjdit7x4e/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukraxe4429a66kjdit7x4e/start"
                      >
                        조선혁명군주
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">귀족</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">경영</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%98%81%EB%AA%85"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">혁명</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%99%98%EC%83%9D"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">환생</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrayh4655a66kxdjcftg3/start"
                >
                  <img
                    alt="대가집 망나니"
                    src="https://image.txtsoda.com/books/cl1ukrayh4655a66kxdjcftg3/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrayh4655a66kxdjcftg3/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrayh4655a66kxdjcftg3/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrayh4655a66kxdjcftg3/start"
                      >
                        대가집 망나니
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EB%B9%99%EC%9D%98"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">빙의</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">차원이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EB%A7%9D%EB%82%98%EB%8B%88"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">망나니</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrazn4894a66k5lcmp7lt/start"
                >
                  <img
                    alt="불꽃처럼"
                    src="https://image.txtsoda.com/books/cl1ukrazn4894a66k5lcmp7lt/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrazn4894a66k5lcmp7lt/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrazn4894a66k5lcmp7lt/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrazn4894a66k5lcmp7lt/start"
                      >
                        불꽃처럼
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%98%81%EC%9B%85"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">영웅</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">경영</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">전쟁</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%84%9C%EC%96%91"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">서양</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukrazt4938a66keibakufj/start"
                >
                  <img
                    alt="우리의 마음은 남쪽을 향한다"
                    src="https://image.txtsoda.com/books/cl1ukrazt4938a66keibakufj/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukrazt4938a66keibakufj/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukrazt4938a66keibakufj/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukrazt4938a66keibakufj/start"
                      >
                        우리의 마음은 남쪽을 향한다
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%98%81%EC%9B%85"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">영웅</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">전쟁</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl3bf0q0f0020286kb8wgflwd/start"
                >
                  <img
                    alt="조선제일침 허임"
                    src="https://image.txtsoda.com/books/cl3bf0q0f0020286kb8wgflwd/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl3bf0q0f0020286kb8wgflwd/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl3bf0q0f0020286kb8wgflwd/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl3bf0q0f0020286kb8wgflwd/start"
                      >
                        조선제일침 허임
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">조선</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">차원이동</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%A7%81%EC%97%85%2F%EC%9D%98%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">의사</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="group relative w-36 snap-start lg:mr-0 lg:min-w-fit ">
                <a
                  target="_self"
                  class="block overflow-clip rounded-md"
                  href="/books/cl1ukra780555a66kn2z08l13/start"
                >
                  <img
                    alt="효종"
                    src="https://image.txtsoda.com/books/cl1ukra780555a66kn2z08l13/cover/cover.webp?format=webp&amp;width=640"
                    height="442"
                    width="300"
                    decoding="async"
                    data-nimg="raw"
                    class="aspect-[300/442] rounded-md transition ease-out lg:group-hover:scale-105"
                    srcset="https://image.txtsoda.com/books/cl1ukra780555a66kn2z08l13/cover/cover.webp?format=webp&amp;width=384 1x, https://image.txtsoda.com/books/cl1ukra780555a66kn2z08l13/cover/cover.webp?format=webp&amp;width=640 2x"
                  ></img>
                  <noscript></noscript>
                </a>
                <div class="flex justify-between mt-4">
                  <div>
                    <h3 class="text-base font-bold text-gray-700 lg:text-lg">
                      <a
                        target="_self"
                        class="block w-36 truncate text-ellipsis lg:w-56"
                        href="/books/cl1ukra780555a66kn2z08l13/start"
                      >
                        효종
                      </a>
                    </h3>
                    <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mt-4 text-sm">
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EB%B9%99%EC%9D%98"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">빙의</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">귀족</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">대체역사</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">한국</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">경영</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0%2F%ED%9A%A8%EC%A2%85"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">효종</span>
                        </a>
                      </li>
                      <li class="">
                        <a
                          target="_self"
                          class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                          href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%B2%AD%EB%82%98%EB%9D%BC"
                        >
                          <span class="mr-0.5 font-mono text-xs">#</span>
                          <span class="text-sm">청나라</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-x-4 gap-y-6 divide-y-2 lg:hidden">
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrahj2233a66kao7dy2sn/start"
                  >
                    <img
                      alt="다시 일어나는 대한"
                      src="https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=384"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                      srcset="https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl1ukrahj2233a66kao7dy2sn/cover/cover.webp?format=webp&amp;width=384 2x"
                    ></img>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">다시 일어나는 대한</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">경영</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">차원이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">전쟁</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">시간이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EA%B5%B0%EB%8C%80"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">군대</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrai12294a66kfnj6fo7u/start"
                  >
                    <img
                      alt="나는 제국익문사였다"
                      src="https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=384"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                      srcset="https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl1ukrai12294a66kfnj6fo7u/cover/cover.webp?format=webp&amp;width=384 2x"
                    ></img>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">나는 제국익문사였다</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%98%81%EC%9B%85"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">영웅</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%B5%9C%EA%B0%95%EC%9E%90"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">최강자</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">전쟁</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%8B%9C%EA%B0%84%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">시간이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%9D%BC%EC%A0%9C%EA%B0%95%EC%A0%90%EA%B8%B0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">일제강점기</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrak12593a66kzg6w8sgc/start"
                  >
                    <img
                      alt="요동왕"
                      src="https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=384"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                      srcset="https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl1ukrak12593a66kzg6w8sgc/cover/cover.webp?format=webp&amp;width=384 2x"
                    ></img>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">요동왕</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EB%A7%88%EB%B2%95"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">마법</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EB%A8%BC%EC%B9%98%ED%82%A8"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">먼치킨</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">차원이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">전쟁</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EA%B7%80%ED%99%98"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">귀환</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EB%AC%B4%EC%97%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">무역</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrav64114a66k796qhy0t/start"
                  >
                    <img
                      alt="역적조련사 : 조선을 바꾸다"
                      src="https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=384"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                      srcset="https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=256 1x, https://image.txtsoda.com/books/cl1ukrav64114a66k796qhy0t/cover/cover.webp?format=webp&amp;width=384 2x"
                    ></img>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">
                    역적조련사 : 조선을 바꾸다
                  </p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%9A%8C%EA%B7%80"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">회귀</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">귀족</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">경영</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukraxe4429a66kjdit7x4e/start"
                  >
                    <img
                      alt="조선혁명군주"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">조선혁명군주</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">귀족</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">경영</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%98%81%EB%AA%85"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">혁명</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%99%98%EC%83%9D"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">환생</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrayh4655a66kxdjcftg3/start"
                  >
                    <img
                      alt="대가집 망나니"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">대가집 망나니</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EB%B9%99%EC%9D%98"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">빙의</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">차원이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EB%A7%9D%EB%82%98%EB%8B%88"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">망나니</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrazn4894a66k5lcmp7lt/start"
                  >
                    <img
                      alt="불꽃처럼"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">불꽃처럼</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%98%81%EC%9B%85"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">영웅</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">경영</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">전쟁</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%84%9C%EC%96%91"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">서양</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukrazt4938a66keibakufj/start"
                  >
                    <img
                      alt="우리의 마음은 남쪽을 향한다"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">
                    우리의 마음은 남쪽을 향한다
                  </p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%98%81%EC%9B%85"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">영웅</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%86%8C%EC%9E%AC%2F%EC%A0%84%EC%9F%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">전쟁</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl3bf0q0f0020286kb8wgflwd/start"
                  >
                    <img
                      alt="조선제일침 허임"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">조선제일침 허임</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">조선</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EC%B0%A8%EC%9B%90%EC%9D%B4%EB%8F%99"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">차원이동</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%A7%81%EC%97%85%2F%EC%9D%98%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">의사</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex gap-4 pt-6 first:pt-0">
                <div class="image-wrap flex-none">
                  <a
                    target="_self"
                    href="/books/cl1ukra780555a66kn2z08l13/start"
                  >
                    <img
                      alt="효종"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      height="208"
                      width="141"
                      decoding="async"
                      data-nimg="raw"
                      class="w-20 rounded-lg"
                    ></img>
                    <noscript></noscript>
                  </a>
                </div>
                <div>
                  <p class="mb-2 text-lg font-semibold">효종</p>
                  <ul class="flex flex-wrap gap-x-2 gap-y-4 lg:gap-3 mb-2 text-sm">
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EB%B9%99%EC%9D%98"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">빙의</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%8B%A0%EB%B6%84%2F%EA%B7%80%EC%A1%B1"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">귀족</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%9E%A5%EB%A5%B4%2F%ED%8C%90%ED%83%80%EC%A7%80%2F%EB%8C%80%EC%B2%B4%EC%97%AD%EC%82%AC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">대체역사</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%ED%95%9C%EA%B5%AD"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">한국</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%ED%85%8C%EB%A7%88%2F%EA%B2%BD%EC%98%81"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">경영</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%A1%B0%EC%84%A0%2F%ED%9A%A8%EC%A2%85"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">효종</span>
                      </a>
                    </li>
                    <li class="">
                      <a
                        target="_self"
                        class="inline-flex items-center whitespace-nowrap rounded-full bg-teal-100 px-3 py-2 text-cyan-700 hover:scale-105 hover:bg-cyan-200 hover:shadow"
                        href="/searches?tagName=%EC%97%AD%EC%82%AC%2F%EC%B2%AD%EB%82%98%EB%9D%BC"
                      >
                        <span class="mr-0.5 font-mono text-xs">#</span>
                        <span class="text-sm">청나라</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div
        style={{
          position: 'fixed',
          zIndex: '9999',
          top: '16px',
          left: '16px',
          right: '16px',
          bottom: '16px',
          pointerEvents: 'none',
        }}
      ></div>
    </>
  );
};

export default More;
