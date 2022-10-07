import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../stores/atom';
import FailPageOne from './LeftPages/FailPageOne';
import LeftEight from './LeftPages/LeftEight';
import LeftFirst from './LeftPages/LeftFirst';
import LeftFive from './LeftPages/LeftFive';
import LeftFour from './LeftPages/LeftFour';
import LeftSecond from './LeftPages/LeftSecond';
import LeftSeven from './LeftPages/LeftSeven';
import LeftSix from './LeftPages/LeftSix';
import LeftThree from './LeftPages/LeftThree';
import './test.css';
const LeftPage = () => {
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const page6 = useRef(null);
  const page7 = useRef(null);
  const page8 = useRef(null);
  const failPage1 = useRef(null);
  const [testPage, setTestPage] = useRecoilState(testPageState);

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
      failPage1,
    ];

    pages.forEach((page) => {
      if (testPage < 9 && pages[testPage] === page) {
        page.current.classList.remove('not-active');
        page.current.classList.add('active');
      } else {
        if (page.current.classList.contains('active')) {
          page.current.classList.remove('active');
          page.current.classList.add('after-active');
        }
      }
    });

    if (testPage === 400) {
      failPage1.current.classList.remove('not-active');
      failPage1.current.classList.add('active');
    }
    if (testPage === 8) {
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
      <div className="w-1/2 h-full absolute">
        <div
          ref={failPage1}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <FailPageOne></FailPageOne>
        </div>
        <div
          ref={page8}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftEight></LeftEight>
        </div>
        <div
          ref={page7}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftSeven></LeftSeven>
        </div>
        <div
          ref={page6}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftSix></LeftSix>
        </div>
        <div
          ref={page5}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftFive></LeftFive>
        </div>
        <div
          ref={page4}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftFour></LeftFour>
        </div>
        <div
          ref={page3}
          className={`w-full h-full left_book_page absolute right-0 not-active
        `}
        >
          <LeftThree></LeftThree>
        </div>
        <div
          ref={page2}
          className={`w-full h-full left_book_page absolute right-0 not-active
         `}
        >
          <LeftSecond></LeftSecond>
        </div>
        <div
          ref={page1}
          className={`w-full h-full left_book_page absolute right-0 not-active
          `}
        >
          <LeftFirst></LeftFirst>
        </div>
      </div>
    </div>
  );
};

export default LeftPage;
