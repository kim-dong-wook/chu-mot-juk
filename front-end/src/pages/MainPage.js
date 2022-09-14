import React from 'react';
import BookCarousel from '../components/Carousel/BookCarousel';
import VideoCarousel from '../components/Carousel/VideoCarousel';

const MainPage = () => {
  return (
    <div>
      <VideoCarousel></VideoCarousel>
      <BookCarousel></BookCarousel>
    </div>
  );
};

export default MainPage;
