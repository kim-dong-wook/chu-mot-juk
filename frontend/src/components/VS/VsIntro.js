import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { roundState } from '../../stores/atom';
import intro from '../../assets/images/vs/VSimg1.jpg';
import intro2 from '../../assets/images/vs/VSimg3.png';
import intro3 from '../../assets/images/vs/VSimg4.png';
import './VS.css';
const VsIntro = () => {
  const [round, setRound] = useRecoilState(roundState);
  const navigate = useNavigate();
  const title = useRef(null);
  const logoImg = useRef(null);
  const button = useRef(null);

  const onClick = () => {
    title.current.classList.add('animate__animated');
    title.current.classList.add('animate__zoomOutDown');
    let fn = setTimeout(() => {
      navigate('/vs');
    }, 1000);
  };
  useEffect(() => {
    setRound(0);
    logoImg.current.classList.add('animate__animated');
    logoImg.current.classList.add('animate__zoomInDown');
    button.current.classList.add('animate__animated');
    button.current.classList.add('animate__zoomInDown');
    let fn = setTimeout(() => {
      logoImg.current.classList.remove('animate__zoomInDown');
      logoImg.current.classList.add('animate__bounce');
    }, 900);
  }, []);
  return (
    <div
      className="h-screen mt-[-4rem] bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${intro})` }}
    >
      <div
        className="w-full h-full flex flex-col bg-cover items-center justify-center"
        ref={title}
      >
        <div
          className="z-10 w-[50%] h-[50%] justify-center items-center flex"
          ref={logoImg}
        >
          <img src={intro2} alt="" />
        </div>
        <div
          id="button"
          className="bg-primary-2 rounded-3xl mt-14 p-2 hover:brightness-125"
          ref={button}
        >
          <img src={intro3} alt="" onClick={onClick}></img>
        </div>
      </div>
    </div>
  );
};

export default VsIntro;
