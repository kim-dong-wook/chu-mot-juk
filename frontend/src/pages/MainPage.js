import React from 'react';
import BookCarousel from '../components/Carousel/BookCarousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';
import BookCarousel2 from '../components/Carousel/Book2';
import BookCarousel3 from '../components/Carousel/Book3';
import BookCarousel4 from '../components/Carousel/Book4';

const MainPage = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <BookCarousel></BookCarousel>
      <BookCarousel2></BookCarousel2>
      <BookCarousel3></BookCarousel3>
      <BookCarousel4></BookCarousel4>
      <BookCarousel2></BookCarousel2>
      <div className="mt-[200px]">밑에 공간</div>
    </div>
  );
};

export default MainPage;
