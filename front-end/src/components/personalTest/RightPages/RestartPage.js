import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import { useNavigate } from 'react-router-dom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';

const RestartPage = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const navigate = useNavigate();
  const answers = useRef(null);
  const onClick = (el) => {
    el.current.classList.add('right-active');
    answers.current.classList.remove('z-50');
    navigate('/testintro');
    setTestPage(-1);
  };

  useEffect(() => {
    if (testPage === 400) {
      answers.current.classList.add('answers-one');
      let fn = setTimeout(() => {
        page.current.classList.remove('z-30');
      }, 1000);
      page.current.classList.add('z-50');
    }
  }, [testPage, page]);

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
          onClick={() => onClick(page)}
        >
          <img src={answer} alt="" className="w-full h-full absolute"></img>
          <div className="my-4 mx-10 flex flex-col items-center">
            <div>회귀 하러 가기..</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestartPage;
