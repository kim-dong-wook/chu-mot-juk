import React from 'react';
import BookCarousel from '../components/Carousel/BookCarousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';

const MainPage = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <BookCarousel name={'카카오페이지'}></BookCarousel>
      <BookCarousel name={'네이버시리즈'}></BookCarousel>
      <BookCarousel name={'리디북스'}></BookCarousel>

      <div className="mt-[200px]">밑에 공간</div>
    </div>
  );
};

export default MainPage;
