import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';
import { useSoundB1 } from '../../../hooks/useSound';
const RightFirst = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const answers = useRef(null);
  const ref1 = useSoundB1();
  const ref2 = useSoundB1();
  const onClick = (el, number) => {
    if (number === 1) {
      setGenre('로맨스');
    } else if (number === 2) {
      setGenre('판타지');
    }

    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    if (testPage === 0) {
      answers.current.classList.add('answers-one');
    }
  }, [testPage]);
  return (
    <div
      className="w-full h-full right_book_page bg-cover pl-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="w-full h-full right_book_page bg-cover flex flex-col space-y-16 justify-center items-center opacity-0"
        ref={answers}
      >
        <div
          className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
          ref={ref1}
          onClick={() => onClick(page, 1)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">사랑</div>
        </div>
        <div
          className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
          ref={ref2}
          onClick={() => onClick(page, 2)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10">모험</div>
        </div>
      </div>
    </div>
  );
};

export default RightFirst;
