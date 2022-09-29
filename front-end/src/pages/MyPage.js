import React from 'react';
import Profile from '../components/Profile';
import Login from '../components/Login';
// import { genderState, loginState } from '../stores/atom';
// import { useRecoilState, useRecoilValue } from 'recoil';

const MyPage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  return (
    <>
      <Login></Login>

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
      {/* <Profile></Profile> */}
    </>
  );
};

export default MyPage;
