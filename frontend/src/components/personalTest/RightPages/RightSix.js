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

const RightSix = ({ page }) => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [fail, setFail] = useRecoilState(failState);
  const [tags, setTags] = useRecoilState(testState);

  const answers = useRef(null);
  const onClick = (el, number) => {
    let temp = new Set();
    tags.forEach((tag) => {
      temp.add(tag);
    });
    console.log(temp);
    if (genre === '로맨스') {
      if (number === 1) {
        temp.add({ number: 84, name: '능력녀' });
        temp.add({ number: 85, name: '재벌녀' });
      } else if (number === 2) {
        temp.add({ number: 88, name: '계략녀' });
        temp.add({ number: 89, name: '능글녀' });
        temp.add({ number: 92, name: '유혹녀' });
        temp.add({ number: 99, name: '짝사랑녀' });
      } else if (number === 3) {
        temp.add({ number: 110, name: '카리스마녀' });
        temp.add({ number: 111, name: '사이다녀' });
      } else if (number === 4) {
        temp.add({ number: 106, name: '무심녀' });
        temp.add({ number: 82, name: '평범녀' });
      }
    }
    setTags(temp);
    el.current.classList.add('right-active');
    if (genre === '판타지' && number === 3) {
      setFail('code-5');
      setTestPage(400);
    } else {
      setTestPage(testPage + 1);
    }
  };

  useEffect(() => {
    if (testPage === 5) {
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
            onClick={() => onClick(page, 1)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>자본주의 사회에서는 돈 아니겠어?</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>그럴 수 밖에 없지 나는 fox/wolf니까</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>불의를 보면 참지 못하는 내 모습</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 4)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>사실 모르겠다 난 평범한데?ㅇㅅㅇㅋ</div>
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
              <div>무슨 일이 있어도 내 애인부터 구한다</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl   hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 2)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>애인은 하나지만...동료는 여러명이다...</div>
              <div>최대 다수의 최대 행복을 위하여</div>
            </div>
          </div>
          <div
            className="text-xl max-w-xl max-h-xl hover:scale-[1.1] cursor-pointer relative"
            onClick={() => onClick(page, 3)}
          >
            <img src={answer} alt="" className="w-full h-full absolute"></img>
            <div className="my-4 mx-10 flex flex-col items-center">
              <div>난 죽음을 택하겠다.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default RightSix;
