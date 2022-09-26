import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftFour = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    if (testPage === 3) {
      one.current.classList.add('one');
      two.current.classList.add('two');
      three.current.classList.add('three');
    } else {
      one.current.classList.remove('one');
      two.current.classList.remove('two');
      three.current.classList.remove('two');
      one.current.classList.add('out');
      two.current.classList.add('out');
      three.current.classList.add('out');
    }
  }, [testPage]);
  if (genre === '로맨스') {
    return (
      <div
        className="w-full h-full right_book_page bg-cover flex text-2xl flex-col items-center justify-center space-y-10"
        style={{ backgroundImage: `url(${background})` }}
        ref={page}
      >
        <div className="  out" ref={one}>
          평일 오전 집을 나서는 당신,
        </div>
        <div className="  out" ref={two}>
          목적지는 어디인가?
        </div>
        <div ref={three}></div>
      </div>
    );
  } else if (genre === '판타지') {
    return (
      <div
        className="w-full h-full right_book_page bg-cover flex text-2xl flex-col items-center justify-center space-y-10"
        style={{ backgroundImage: `url(${background})` }}
        ref={page}
      >
        <div className="  out" ref={one}>
          신이 나타나 능력을 주겠다고 한다!
        </div>
        <div className="  out" ref={two}>
          "너가 가장 강하게 원하는 것이 무엇인가.."
        </div>
        <div className="  out" ref={three}>
          당신은 어떤 능력을 선택할 것인가?
        </div>
      </div>
    );
  }

  return (
    <div>
      <div ref={one}></div>
      <div ref={two}></div>
      <div ref={three}></div>
    </div>
  );
};

export default LeftFour;
