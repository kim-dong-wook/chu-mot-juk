import React from 'react';
import BookCarousel from '../components/Carousel/BookCarousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';
import Footer from '../components/common/Footer';
import Footer2 from '../components/common/Footer2';

const MainPage = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <BookCarousel name={'카카오페이지'}></BookCarousel>
      <BookCarousel name={'네이버시리즈'}></BookCarousel>
      <BookCarousel name={'리디북스'}></BookCarousel>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
