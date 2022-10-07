import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, testState } from '../../stores/atom';
import { useNavigate } from 'react-router-dom';

import LeftPage from './LeftPage';
import RightPage from './RightPage';
import background from '../../assets/images/test/TestBackground.jpg';
import './test.css';
import bgm from '../../assets/sounds/TestBGM.mp3';
import Loading from '../Loading';

const PersonalTest = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [tags, setTags] = useRecoilState(testState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const testBook = useRef(null);
  const testBox = useRef(null);
  const audio = new Audio(bgm);
  useEffect(() => {
    // audio.load();
    // audio.play();
    setTestPage(-1);
    setTags(new Set());
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

      let fn3 = setTimeout(() => {
        setLoading(true);
      }, 1500);
    }
  }, [testPage]);
  return (
    <div
      className="h-screen mt-[-4rem] bg-cover relative flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute z-50 top-20 w-9 h-6 overflow-hidden rounded-full">
        <audio
          autoPlay
          controls
          className="w-[100px] h-6 translate-x-[-0.5rem]"
        >
          <source src={bgm} type="audio/mp3"></source>
        </audio>
      </div>
      {loading ? <Loading /> : null}
      <div
        className="w-[1728px] h-[785px] flex items-center justify-center bg-primary-1/50 backdrop-blur-sm rounded-3xl"
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
