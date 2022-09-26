import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftFive = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);
  const two = useRef(null);

  useEffect(() => {
    if (testPage === 4) {
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
        <div className="  out" ref={one}>
          저 멀리서 걸어오는 내 남자/여자의 모습이 보인다!
        </div>
        <div className="  out" ref={two}>
          그/그녀의 모습은?
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
        <div className="  out" ref={one}>
          이곳은 내가 주인공인 세계다.
        </div>
        <div className="  out" ref={two}>
          이 곳의 분위기는 어떠한가?
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

export default LeftFive;
