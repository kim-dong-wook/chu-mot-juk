import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  testPageState,
  genreState,
  failState,
  testState,
} from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';
import { useSoundB1 } from '../../../hooks/useSound';
const RightSeven = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [fail, setFail] = useRecoilState(failState);
  const [tags, setTags] = useRecoilState(testState);
  const answers = useRef(null);
  const ref1 = useSoundB1();
  const ref2 = useSoundB1();
  const ref3 = useSoundB1();
  const ref4 = useSoundB1();
  const ref5 = useSoundB1();
  const ref6 = useSoundB1();
  const onClick = (el, number) => {
    let temp = new Set();
    tags.forEach((tag) => {
      temp.add(tag);
    });
    console.log(temp);
    if (genre === '로맨스') {
      if (number === 1) {
        temp.add({ number: 54, name: '능력남' });
        temp.add({ number: 55, name: '재벌남' });
        temp.add({ number: 75, name: '무심남' });
        temp.add({ number: 70, name: '철벽남' });
      } else if (number === 2) {
        temp.add({ number: 60, name: '다정남' });
        temp.add({ number: 61, name: '애교남' });
        temp.add({ number: 80, name: '연하남' });
        temp.add({ number: 78, name: '존댓말남' });
      } else if (number === 3) {
        temp.add({ number: 67, name: '상처남' });
        temp.add({ number: 50, name: '츤데레남' });
        temp.add({ number: 65, name: '나쁜남자' });
        temp.add({ number: 73, name: '까칠남' });
        temp.add({ number: 74, name: '냉정남' });
      }
    } else if (genre === '판타지') {
      if (number === 1) {
        temp.add({ number: 190, name: '정령사/소환사' });
        temp.add({ number: 180, name: '마법사' });
        temp.add({ number: 183, name: '마검사' });
        temp.add({ number: 197, name: '마법도구' });
      } else if (number === 2) {
        temp.add({ number: 182, name: '마족이야기' });
        temp.add({ number: 189, name: '네크로맨서/흑마법사' });
      }
    }
    setTags(temp);

    el.current.classList.add('right-active');
    if (genre === '로맨스' && number === 4) {
      setFail('code-3');
      setTestPage(400);
    } else {
      setTestPage(testPage + 1);
    }
  };

  useEffect(() => {
    if (testPage === 6) {
      if (genre === '로맨스') {
        answers.current.classList.add('answers-one');
      } else if (genre === '판타지') {
        answers.current.classList.add('answers-one');
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
            ref={ref1}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>아직 안 갔습니까?</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref2}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>누나/오빠 여기서 뭐해요?</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref3}
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>뭘 봐?</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref4}
            onClick={() => onClick(page, 4)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>도를 믿으십니까?</div>
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
            ref={ref5}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>대천사</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref6}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>마왕</div>
            </div>
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
      <div ref={ref5}></div>
      <div ref={ref6}></div>
    </div>
  );
};

export default RightSeven;
