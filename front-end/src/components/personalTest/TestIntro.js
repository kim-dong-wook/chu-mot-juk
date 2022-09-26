import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import background from '../../assets/images/test/TestBackground.jpg';
import logo from '../../assets/images/test/TestLogo.png';
import start from '../../assets/images/test/TestStart.png';

const TestIntro = () => {
  const navigate = useNavigate();
  const button = useRef(null);
  const onClick = () => {
    navigate('/test');
  };
  useEffect(() => {
    let fn = setTimeout(() => {
      button.current.classList.add('jump');
    }, 1500);
  }, []);
  return (
    <div
      className="h-[873px] flex flex-col items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="z-10 w-[50%] h-[50%] justify-center items-center flex fadeIn">
        <img src={logo} alt="" />
      </div>
      <div
        id="button"
        className="bg-blue-300 rounded-3xl mt-14 p-2 hover:brightness-125 fadeIn duration-200"
        ref={button}
      >
        <img src={start} alt="" onClick={onClick} className="w-[24rem]"></img>
      </div>
    </div>
  );
};

export default TestIntro;
