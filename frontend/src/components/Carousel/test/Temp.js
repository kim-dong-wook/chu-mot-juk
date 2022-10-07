import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './style.css';

// import required modules
import { EffectCards } from 'swiper';

const Temp = ({ book }) => {
  console.log(book);
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
        {(book.comments
          ? book.comments.slice(0, 10)
          : [
              '키워드 없음',
              '키워드 없음',
              '키워드 없음',
              '키워드 없음',
              '키워드 없음',
              '키워드 없음',

              '키워드 없음',
              '키워드 없음',

              '키워드 없음',
              '키워드 없음',
            ]
        ).map((tag, index) => (
          <SwiperSlide>
            <div onClick={onClick1} class="card">
              {!c1 ? `${index + 1}위` : `#${tag}`}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Temp;
