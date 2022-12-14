import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState, testState } from '../../../stores/atom';

import answer from '../../../assets/images/test/answer.png';
import background from '../../../assets/images/test/rightPage.png';
import { useSoundB1 } from '../../../hooks/useSound';
const RightThree = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [tags, setTags] = useRecoilState(testState);
  const ref1 = useSoundB1();
  const ref2 = useSoundB1();
  const ref3 = useSoundB1();
  const ref4 = useSoundB1();
  const ref5 = useSoundB1();
  const ref6 = useSoundB1();
  const answers = useRef(null);
  const onClick = (el, number) => {
    let temp = new Set();
    tags.forEach((tag) => {
      temp.add(tag);
    });
    console.log(temp);
    if (genre === '로맨스') {
      if (number === 1) {
        temp.add({ number: 6, name: '서양풍' });
      } else if (number === 2) {
        temp.add({ number: 5, name: '동양풍' });
      } else if (number === 3) {
        temp.add({ number: 1, name: '현대물' });
      }
    } else if (genre === '판타지') {
      if (number === 1) {
        temp.add({ number: 162, name: '회귀물' });
      } else if (number === 2) {
        temp.add({ number: 159, name: '전통무협' });
      } else if (number === 3) {
        temp.add({ number: 149, name: '현대판타지' });
      }
    }

    setTags(temp);

    el.current.classList.add('right-active');
    setTestPage(testPage + 1);
  };

  useEffect(() => {
    if (testPage === 2) {
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
            ref={ref1}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>휘향찬란한 샹들리에와</div>
              <div>러블리한 침대</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref2}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>역사책에서만 보던</div>
              <div>등불과 문풍지</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref3}
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>크게 달라진건 없는</div>
              <div>평소의 내 방</div>
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
            ref={ref4}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>내 어릴적 풍경</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref5}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>역사책에서만 보던</div>
              <div>등불과 문풍지</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
            ref={ref6}
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>크게 달라진건 없는</div>
              <div>평소의 내 방</div>
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

export default RightThree;
