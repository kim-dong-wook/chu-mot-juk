import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/TestImg1.jpg';

const RightEight = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);

  const answers = useRef(null);
  const onClick = (el) => {
    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    if (testPage === 7) {
      if (genre === '로맨스') {
        answers.current.classList.add('answers-four');
      } else if (genre === '판타지') {
        answers.current.classList.add('answers-four');
      }
    }
  }, [testPage, genre]);

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
          className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
          onClick={() => onClick(page)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10 flex flex-col items-center">
            <div>당신이 읽던 그 책은...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightEight;
