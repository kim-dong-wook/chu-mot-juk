import React from 'react';
import BookCarousel from '../components/Carousel/BookCarousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';

const MainPage = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <BookCarousel name={'kakao'}></BookCarousel>
      <BookCarousel name={'naver'}></BookCarousel>
      <BookCarousel name={'ridi'}></BookCarousel>

      <div className="mt-[200px]">밑에 공간</div>
    </div>
  );
};

export default MainPage;
