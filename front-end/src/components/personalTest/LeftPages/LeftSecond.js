import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/leftPage.png';
const LeftSecond = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    if (testPage === 1) {
      one.current.classList.add('one');
      two.current.classList.add('two');
      three.current.classList.add('three');
    } else {
      one.current.classList.remove('one');
      two.current.classList.remove('two');
      three.current.classList.remove('three');
      one.current.classList.add('out');
      two.current.classList.add('out');
      three.current.classList.add('out');
    }
  }, [testPage]);
  if (genre === '로맨스') {
    return (
      <div
        className="w-full h-full right_book_page bg-cover text-2xl flex flex-col items-center justify-center space-y-10"
        style={{ backgroundImage: `url(${background})` }}
        ref={page}
      >
        <div className="out" ref={one}>
          깊게 잠이 들어 있는 당신..
        </div>
        <div className="out" ref={two}>
          당신을 깨우는 소리는?
        </div>
        <div className="out" ref={three}></div>
      </div>
    );
  } else if (genre === '판타지') {
    return (
      <div
        className="w-full h-full right_book_page bg-cover text-2xl flex flex-col items-center justify-center space-y-10"
        style={{ backgroundImage: `url(${background})` }}
        ref={page}
      >
        <div className="out" ref={one}>
          "띠링!"<br></br>"일어날 시간입니다."
        </div>
        <div className="out" ref={two}>
          어? 이건..뭐지?
        </div>
        <div className="out" ref={three}>
          내 눈앞에 상태창이 보인다.
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

export default LeftSecond;
