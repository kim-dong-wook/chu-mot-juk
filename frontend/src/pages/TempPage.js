import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../stores/atom';
import Temp from '../components/Carousel/test/Temp';

const TempPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState); //recoil 적용
  const [ageRange, setAgeRange] = useRecoilState(ageRangeState); // '20~29'
  const [gender, setGender] = useRecoilState(genderState); //  'male'
  const [user_id, setUserId] = useRecoilState(userIdState); // 1234512345
  const [nickName, setNickName] = useRecoilState(nicknameState); // '박문대'
  const [profileImage, setProfileImage] = useRecoilState(profileImgState); // '주소'

  // 초기화기능  로그아웃안하고 껏을때 로커스토리지 남아있을때 대비
  useEffect(() => {
    setIsLoggedIn(false);
    setAgeRange(0);
    setGender(false);
    setUserId('');
    setNickName('');
    setProfileImage('');
    console.log(isLoggedIn);
    console.log(ageRange);
    console.log(gender);
    console.log(user_id);
    console.log(nickName);
    console.log(profileImage);
    // navigate('/mypage');
  }, []);

  return <Temp></Temp>;
};

export default TempPage;
