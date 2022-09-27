import React, { useEffect, useRef } from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import background from '../../assets/images/test/TestBackground.jpg';
import './test.css';

const PersonalTest = () => {
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
