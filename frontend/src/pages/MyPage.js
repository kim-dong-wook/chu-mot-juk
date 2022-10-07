import React from 'react';
import Profile from '../components/Profile';
import Login from '../components/Login';
import { isLoginState } from '../stores/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const MyPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState);
  return (
    <>
      {/* <Login></Login>
      <Profile></Profile> */}

      {isLoggedIn === true ? (
        <>
          <Profile></Profile>
        </>
      ) : (
        <>
          <Login></Login>
        </>
      )}
    </>
  );
};

export default MyPage;
