import React, { useRef } from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';
import './test.css';

const PersonalTest = () => {
  return (
    <div className="h-[873px] flex items-center justify-center">
      <div className="w-[90%] h-[90%] border-2 border-black flex items-center justify-center bg-white">
        <div className="w-[80%] h-[90%] border-2 border-black flex relative relative drop-shadow-4xl">
          <LeftPage></LeftPage>
          <RightPage></RightPage>
        </div>
      </div>
    </div>
  );
};

export default PersonalTest;
