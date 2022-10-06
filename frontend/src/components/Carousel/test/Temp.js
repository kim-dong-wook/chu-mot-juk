import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';

// import required modules
import { EffectCards } from 'swiper';

const Temp = () => {
  const [c1, setC1] = useState(false);
  const onClick1 = () => {
    setC1(!c1);
  };
  useEffect(() => {
    setC1(false);
  }, []);
  return (
    <div className="relative w-full h-full">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div onClick={onClick1} class="card">
            {!c1 ? '1위' : '상태창'}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306514/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306515/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.ridicdn.net/cover/425306513/xxlarge#1"
            alt=""
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Temp;
