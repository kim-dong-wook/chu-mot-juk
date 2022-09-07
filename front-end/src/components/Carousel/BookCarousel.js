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
    <div className="px-[5%]">
      <h1>제목</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        slidesPerGroup={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        loop={true}
        className="px-2"
      >
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 origin-left hover:z-50">
          <img src="https://img.ridicdn.net/cover/4621001638/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/1377099102/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/3092017733/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/1811203363/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/2259009524/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://via.placeholder.com/485x670"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 origin-right hover:z-50">
          <img src="https://via.placeholder.com/480x670"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 origin-left hover:z-50">
          <img src="https://img.ridicdn.net/cover/425306513/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/2008033538/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/2065072847/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/2065072847/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 hover:z-50">
          <img src="https://img.ridicdn.net/cover/3076030032/xxlarge#1"></img>
        </SwiperSlide>
        <SwiperSlide className="w-60 h-[20.5rem] items-center flex justify-center hover:bg-sky-700 hover:scale-125 duration-300 origin-right hover:z-50">
          <img src="https://img.ridicdn.net/cover/425297966/xxlarge#1"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BookCarousel;
