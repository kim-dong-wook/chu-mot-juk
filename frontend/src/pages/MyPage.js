import React from 'react';
import Profile from '../components/Profile';
import Login from '../components/Login';
import { isLoginState } from '../stores/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const MyPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState);
  return (
    <>
      <Login></Login>
      <Profile></Profile>

      {/* {isLoggedIn === true ? (
        <>
          <Profile></Profile>
        </>
      ) : (
        <>
          <Login></Login>
        </>
      )} */}

      <div className="mt-[300px]">마이 페이지</div>
    </>
  );
};

export default MyPage;
