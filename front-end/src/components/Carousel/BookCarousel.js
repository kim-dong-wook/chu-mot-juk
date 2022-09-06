import React from 'react';
import 'tailwindcss/tailwind.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import './carousel.css';
import './pagination.css';

import 'swiper/css/navigation';
const BookCarousel = () => {
  return (
    <div>
      <h1>제목</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        slidesPerGroup={6}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 origin-left hover:z-50">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700  hover:scale-150 duration-300 hover:z-50">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 origin-right hover:z-50">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 origin-left hover:z-50">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 9
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 10
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 hover:z-50">
          Slide 11
        </SwiperSlide>
        <SwiperSlide className="border-2 border-black w-60 h-80 items-center flex justify-center hover:bg-sky-700 hover:scale-150 duration-300 origin-right hover:z-50">
          Slide 12
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookCarousel;
