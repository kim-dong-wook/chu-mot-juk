import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import logo from '../../assets/images/logo1.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <div>
      <header
        className={`hover:bg-primary-1 bg-transparent sticky top-0 z-50 flex px-[5%] h-16 items-center bg-gradient-to-b from-primary-2 to-transparent
      ${scrollPosition > 30 ? 'bg-primary-1 duration-500' : ''}`}
      >
        <Link className="w-10 mr-20" to="/">
          <img src={logo} style={{ maxWidth: '300%' }}></img>
        </Link>
        <div className="w-full flex justify-between">
          <div className="ml-[4vw] space-x-4">
            <Link to="/test">유형검사</Link>
            <Link to="/vs">이상형월드컵</Link>
            <Link to="/tagsearch">태그검색</Link>
          </div>
          <div className=" space-x-4">
            <Link to="/register">회원가입</Link>
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Header;
