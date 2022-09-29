import React from 'react';
import Mybox from '../components/MyBox';
import Profile from '../components/Profile';

const RegisterPage = () => {
  return (
    <div>
      <Profile></Profile>
      {/* <Mybox></Mybox> */}

      <div className="mt-[300px]">로그인시 보관함</div>
    </div>
  );
};

export default RegisterPage;
