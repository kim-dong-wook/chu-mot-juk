import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState, failState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';

const RightFive = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [fail, setFail] = useRecoilState(failState);

  const answers = useRef(null);
  const onClick = (el, number) => {
    el.current.classList.add('right-active');
    if (genre === '로맨스' && number === 4) {
      setFail('code-2');
      setTestPage(400);
    } else {
      setTestPage(testPage + 1);
    }
  };

  useEffect(() => {
    if (testPage === 4) {
      if (genre === '로맨스') {
        answers.current.classList.add('answers-two');
      } else if (genre === '판타지') {
        answers.current.classList.add('answers-two');
      }
    }
  }, [testPage, genre]);

  if (genre === '로맨스') {
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
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>주름 하나 없는 슈트</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>오버핏 후드티</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>피어싱과 가죽자켓</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 4)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>톰브라운 가디건과 형광 반바지를 입은 문신남</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (genre === '판타지') {
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
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>통쾌/유쾌함</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>비장/고독함</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>잔잔함/서정적</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default RightFive;
