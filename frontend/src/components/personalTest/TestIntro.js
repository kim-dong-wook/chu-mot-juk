import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import background from '../../assets/images/test/TestBackground.jpg';
import logo from '../../assets/images/test/TestLogo.png';
import start from '../../assets/images/test/TestStart.png';
import 'animate.css';
// link a button ref={ref1}

const TestIntro = () => {
  const navigate = useNavigate();
  const button = useRef(null);
  const logoImg = useRef(null);
  const onClick = () => {
    logoImg.current.classList.add('animate__animated');
    logoImg.current.classList.add('animate__hinge');

    button.current.classList.add('animate__animated');
    button.current.classList.add('animate__fadeOutDown');
    let fn = setTimeout(() => {
      navigate('/test');
      window.location.reload();
    }, 2500);
  };
  useEffect(() => {
    let fn = setTimeout(() => {
      // button.current.classList.add('jump');
      button.current.classList.remove('duration-200');
      button.current.classList.remove('fadeIn');

      button.current.classList.add('animate__animated');
      button.current.classList.add('animate__bounce');
    }, 1000);
  }, []);
  return (
    <div
      className="h-screen mt-[-4rem] flex flex-col items-center justify-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div
          className="z-10 w-[50%] h-[50%] justify-center items-center flex animate__animated animate__bounceInDown"
          ref={logoImg}
        >
          <img src={logo} alt="" />
        </div>
        <div
          className="bg-blue-300 h-[6rem] rounded-3xl mt-8 p-2 hover:brightness-125 fadeIn duration-200"
          ref={button}
        >
          <img src={start} alt="" onClick={onClick} className="w-[15rem]"></img>
        </div>
      </div>
    </div>
  );
};

export default TestIntro;
