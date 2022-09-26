import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftThree = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);
  const two = useRef(null);

  useEffect(() => {
    if (testPage === 2) {
      one.current.classList.add('one');
      two.current.classList.add('two');
    } else {
      one.current.classList.remove('one');
      two.current.classList.remove('two');
      one.current.classList.add('out');
      two.current.classList.add('out');
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
          당신을 깨우는 소리에 눈을 떴다.
        </div>
        <div className="out" ref={two}>
          일어나자 마자 눈 앞에 보이는 풍경은?
        </div>
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
          상태창이 사라지고 당신은 정신을 차렸다.
        </div>
        <div className="out" ref={two}>
          일어나자 마자 눈 앞에 보이는 풍경은?
        </div>
      </div>
    );
  }

  return (
    <div>
      <div ref={one}></div>
      <div ref={two}></div>
    </div>
  );
};

export default LeftThree;
