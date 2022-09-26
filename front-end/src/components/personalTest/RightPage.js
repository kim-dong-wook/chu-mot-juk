import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../stores/atom';
import BookCover from './RightPages/BookCover';
import RightFirst from './RightPages/RightFirst';

import './test.css';
import RightSecond from './RightPages/RightSecond';
import RightThree from './RightPages/RightThree';
import RightFour from './RightPages/RightFour';
import RightFive from './RightPages/RightFive';
import RightSix from './RightPages/RightSix';
import RightSeven from './RightPages/RightSeven';
import RightEight from './RightPages/RightEight';
import FailPageOne from './LeftPages/FailPageOne';
import RestartPage from './RightPages/RestartPage';
const RightPage = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const page6 = useRef(null);
  const page7 = useRef(null);
  const page8 = useRef(null);
  const page9 = useRef(null);
  const failPage1 = useRef(null);
  const onClick = (el) => {
    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    const pages = [
      page1,
      page2,
      page3,
      page4,
      page5,
      page6,
      page7,
      page8,
      page9,
      failPage1,
    ];
    if (testPage === 8) {
      pages.forEach((page) => {
        if (page.current.classList.contains('right-active')) {
          page.current.classList.remove('right-active');
        }
      });
    }
  }, [testPage]);
  return (
    <div className="absolute w-full h-full">
      <div className="w-1/2 h-full absolute right-0 overflow-hidden rounded-r-3xl">
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={failPage1}
        >
          <RestartPage page={failPage1}></RestartPage>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page9}
        >
          <RightEight page={page9}></RightEight>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page8}
        >
          <RightSeven page={page8}></RightSeven>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page7}
        >
          <RightSix page={page7}></RightSix>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page6}
        >
          <RightFive page={page6}></RightFive>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page5}
        >
          <RightFour page={page5}></RightFour>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page4}
        >
          <RightThree page={page4}></RightThree>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page3}
        >
          <RightSecond page={page3}></RightSecond>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          ref={page2}
        >
          <RightFirst page={page2}></RightFirst>
        </div>
        <div
          className="w-full h-full border-2 border-black right_book_page absolute right-0 z-30"
          onClick={() => onClick(page1)}
          ref={page1}
        >
          <BookCover></BookCover>
        </div>
      </div>
    </div>
  );
};

export default RightPage;
