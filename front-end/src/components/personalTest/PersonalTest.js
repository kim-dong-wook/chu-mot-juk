import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../stores/atom';
import { useNavigate } from 'react-router-dom';

import LeftPage from './LeftPage';
import RightPage from './RightPage';
import background from '../../assets/images/test/TestBackground.jpg';
import './test.css';

const PersonalTest = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const navigate = useNavigate();
  const testBook = useRef(null);
  const testBox = useRef(null);
  useEffect(() => {
    testBox.current.classList.add('animate__animated');
    testBox.current.classList.add('animate__fadeInDown');

    let fn = setTimeout(() => {
      testBook.current.classList.remove('opacity-0');
      testBook.current.classList.add('animate__animated');
      testBook.current.classList.add('animate__bounceInDown');
    }, 1000);
  }, []);

  useEffect(() => {
    if (testPage === 8) {
      let fn1 = setTimeout(() => {
        testBook.current.classList.remove('animate__bounceInDown');
        testBook.current.classList.add('animate__fadeOut');
      }, 1500);

      let fn2 = setTimeout(() => {
        navigate('/testresult', {
          state: {},
        });
      }, 3000);
    }
  }, [testPage]);
  return (
    <div
      className="h-[873px] flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="w-[90%] h-[90%] flex items-center justify-center bg-primary-1/50 backdrop-blur-sm rounded-3xl"
        ref={testBox}
      >
        <div
          className="w-[80%] h-[90%] flex relative relative opacity-0"
          ref={testBook}
        >
          <LeftPage></LeftPage>
          <RightPage></RightPage>
        </div>
      </div>
    </div>
  );
};

export default PersonalTest;
