import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/TestImg1.jpg';

const RightFirst = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const answers = useRef(null);
  const onClick = (el, message) => {
    console.log(message);
    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    if (testPage === 0) {
      answers.current.classList.add('answers');
    }
  }, [testPage]);
  return (
    <div
      className="w-full h-full right_book_page bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="w-full h-full right_book_page bg-cover flex flex-col space-y-16 justify-center items-center opacity-0"
        ref={answers}
      >
        <div
          className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
          onClick={() => onClick(page, 1)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">동해물과 백두산이</div>
        </div>
        <div
          className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
          onClick={() => onClick(page, 2)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">마르고 닳도록</div>
        </div>
        <div
          className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
          onClick={() => onClick(page, 3)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">하느님이 보우하사</div>
        </div>
        <div
          className="text-lg max-w-xl max-h-sm hover:scale-[1.1] cursor-pointer relative"
          onClick={() => onClick(page, 4)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">
            <div>우리 나라 만세~~~~ </div>
            <div>우리 나라 만세~~~~ </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightFirst;
