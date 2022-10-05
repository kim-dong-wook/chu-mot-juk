import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState, failState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';
import { useSoundB1 } from '../../../hooks/useSound';
const RightSecond = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [fail, setFail] = useRecoilState(failState);
  const answers = useRef(null);
  const ref1 = useSoundB1();
  const ref2 = useSoundB1();
  const ref3 = useSoundB1();
  const ref4 = useSoundB1();
  const onClick = (el, number) => {
    el.current.classList.add('right-active');
    if (genre === '판타지' && number === 1) {
      setFail('code-4');
      setTestPage(400);
    } else {
      setTestPage(testPage + 1);
    }
  };

  useEffect(() => {
    if (testPage === 1) {
      if (genre === '로맨스') {
        answers.current.classList.add('answers-two');
      } else if (genre === '판타지') {
        answers.current.classList.add('answers-three');
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
            className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
            ref={ref1}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10">짹짹짹짹 새소리</div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
            ref={ref2}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10">
              아가씨/도련님!! 일어나실 시간이에요
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
            className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
            ref={ref3}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10">무시한다</div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl h-16 hover:scale-[1.1] cursor-pointer relative"
            ref={ref4}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10">눌러본다</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div ref={ref1}></div>
      <div ref={ref2}></div>
      <div ref={ref3}></div>
      <div ref={ref4}></div>
    </div>
  );
};

export default RightSecond;
