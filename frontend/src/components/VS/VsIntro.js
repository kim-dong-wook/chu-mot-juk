import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import intro from '../../assets/images/vs/VSimg1.jpg';
import intro2 from '../../assets/images/vs/VSimg3.png';
import intro3 from '../../assets/images/vs/VSimg4.png';
import './VS.css';
import $ from 'jquery';
const VsIntro = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/vs');
  };
  useEffect(() => {
    let fn = setTimeout(() => {
      $('#button').width = $('#button').width();
      $('#button').addClass('jump');
    }, 1500);
  }, []);
  return (
    <div
      className="h-screen mt-[-4rem] flex flex-col bg-cover items-center justify-center brightness-100"
      style={{ backgroundImage: `url(${intro})` }}
    >
      <div className="z-10 w-[50%] h-[50%] justify-center items-center flex fadeIn">
        <img src={intro2} alt="" />
      </div>
      <div
        id="button"
        className="bg-primary-2 rounded-3xl mt-14 p-2 hover:brightness-125 fadeIn duration-200"
      >
        <img src={intro3} alt="" onClick={onClick}></img>
      </div>
    </div>
  );
};

export default VsIntro;
