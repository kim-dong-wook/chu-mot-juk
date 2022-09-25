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
const RightPage = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const page6 = useRef(null);
  const onClick = (el) => {
    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    const pages = [page1, page2, page3, page4, page5];
    if (testPage === 5) {
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
          onClick={() => onClick(page6)}
          ref={page6}
        >
          <RightFive></RightFive>
        </div>{' '}
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          onClick={() => onClick(page5)}
          ref={page5}
        >
          <RightFour></RightFour>
        </div>{' '}
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          onClick={() => onClick(page4)}
          ref={page4}
        >
          <RightThree></RightThree>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          onClick={() => onClick(page3)}
          ref={page3}
        >
          <RightSecond></RightSecond>
        </div>
        <div
          className="w-full h-full border-2 border-black bg-slate-400 right_book_page absolute right-0 z-30"
          // onClick={() => onClick(page2)}
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
