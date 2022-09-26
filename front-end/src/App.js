import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import TestIntro from './components/personalTest/TestIntro';
import VsIntro from './components/VS/VsIntro';
import Kakao from './pages/Kakao';
import Kakao2 from './pages/Kakao2';

import MyPage from './pages/MyPage';
import MyPage2 from './pages/MyPage2';
import MyPage3 from './pages/MyPage3';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MorePage from './pages/MorePage';
import RegisterPage from './pages/RegisterPage';
import TagSearchPage from './pages/TagSearchPage';
import TempPage from './pages/TempPage';
import TestPage from './pages/TestPage';
import VsPage from './pages/VsPage';
import VsResultPage from './pages/VsResultPage';
import { axiosBasic } from './stores/atom';

const App = () => {
  // const KakaoRefresh = async () => {
  //   try {
  //     const response = await axiosBasic.post('api/token/refresh', {
  //       refresh: `${localStorage.getItem('refreshtoken')}`,
  //     });
  //     console.log(response.data);
  //     console.log('리프레쉬 성공');

  //     localStorage.setItem('accesstoken', response.data.access);
  //     localStorage.setItem('refreshtoken', response.data.refresh);
  //     setTimeout(KakaoRefresh, 1000 * 60 * 4);
  //   } catch (e) {
  //     console.log(e);
  //     console.log('리프레쉬 불가');
  //   }
  // };

  // if (performance.navigation.type === 1) {
  //   //새로고침하면 바로 로그인 연장(토큰 갱신)
  //   if (localStorage.accesstoken) KakaoRefresh();
  // }

  return (
    <Routes>
      <Route element={<Header></Header>}>
        <Route path="/oauth/kakao/callback" element={<Kakao />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/2" element={<MyPage2 />} />
        <Route path="/3" element={<MyPage3 />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tagsearch" element={<TagSearchPage />} />
        <Route path="/vs" element={<VsPage />} />
        <Route path="/vsintro" element={<VsIntro />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/testintro" element={<TestIntro />} />
        <Route path="/vsresult" element={<VsResultPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/temp" element={<TempPage />} />
      </Route>
    </Routes>
  );
};

export default App;
