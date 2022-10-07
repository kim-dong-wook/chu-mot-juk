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
const RightFour = ({ page }) => {
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
    if (genre === '판타지') {
      if (number === 1) {
        temp.add({ number: 155, name: '던전물' });
        temp.add({ number: 152, name: '정통판타지' });
        temp.add({ number: 172, name: '차원이동물' });
      } else if (number === 2) {
        temp.add({ number: 166, name: '전문직' });
        temp.add({ number: 165, name: '연예계' });
        temp.add({ number: 153, name: '스포츠' });
        temp.add({ number: 179, name: '만능회사원' });
        temp.add({ number: 184, name: '현대판타지' });
      } else if (number === 3) {
        temp.add({ number: 159, name: '전통무협' });
        temp.add({ number: 160, name: '신무협' });
        temp.add({ number: 185, name: '궁극의검사' });
        temp.add({ number: 186, name: '전사이야기' });
      }
    }

    setTags(temp);

    el.current.classList.add('right-active');
    if (genre === '로맨스' && number === 3) {
      setFail('code-1');
      setTestPage(400);
    } else {
      setTestPage(testPage + 1);
    }
  };

  useEffect(() => {
    if (testPage === 3) {
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
            className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
            ref={ref1}
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>대학교</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref2}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>회사</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref3}
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>이불 밖은 위험해! 안 나간다</div>
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
              <div>당연히 이세계에서 마법을 쓰는게 최고 아냐?</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            ref={ref5}
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>난 지구에서 제일 강해지고 싶어</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
            ref={ref6}
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>칼 끝에서 매화를 피워내고 싶습니다</div>
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

export default RightFour;
