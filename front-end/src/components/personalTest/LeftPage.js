import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../stores/atom';
import LeftFirst from './LeftPages/LeftFirst';
import LeftFive from './LeftPages/LeftFive';
import LeftFour from './LeftPages/LeftFour';
import LeftSecond from './LeftPages/LeftSecond';
import LeftThree from './LeftPages/LeftThree';
import './test.css';
const LeftPage = () => {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const [testPage, setTestPage] = useRecoilState(testPageState);

  useEffect(() => {
    const pages = [page1, page2, page3, page4, page5];
    pages.forEach((page) => {
      if (pages[testPage] === page) {
        page.current.classList.remove('not-active');
        page.current.classList.add('active');
      } else {
        if (page.current.classList.contains('active')) {
          page.current.classList.remove('active');
          page.current.classList.add('after-active');
        }
      }
    });
    if (testPage === 5) {
      pages.forEach((page) => {
        if (
          page.current.classList.contains('after-active') ||
          page.current.classList.contains('active')
        ) {
          page.current.classList.remove('after-active');
          page.current.classList.remove('active');
          page.current.classList.add('not-active');
        }
      });
    }
  }, [testPage]);

  return (
    <div className="absolute w-full h-full">
      <div className="w-1/2 h-full absolute rounded-l-3xl">
        <div
          ref={page5}
          className={`w-full h-full border-2 border-black bg-white left_book_page absolute right-0 not-active
        `}
        >
          <LeftFive></LeftFive>
        </div>
        <div
          ref={page4}
          className={`w-full h-full border-2 border-black bg-white left_book_page absolute right-0 not-active
        `}
        >
          <LeftFour></LeftFour>
        </div>
        <div
          ref={page3}
          className={`w-full h-full border-2 border-black bg-white left_book_page absolute right-0 not-active
        `}
        >
          <LeftThree></LeftThree>
        </div>
        <div
          ref={page2}
          className={`w-full h-full border-2 border-black bg-white left_book_page absolute right-0 not-active
         `}
        >
          <LeftSecond></LeftSecond>
        </div>
        <div
          ref={page1}
          className={`w-full h-full border-2 border-black bg-white left_book_page absolute right-0 not-active
          `}
        >
          <LeftFirst></LeftFirst>
        </div>
      </div>
    </div>
  );
};

export default LeftPage;
