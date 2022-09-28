import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/leftPage.png';
const LeftSeven = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);

  useEffect(() => {
    if (testPage === 6) {
      one.current.classList.add('one');
    } else {
      one.current.classList.remove('one');
      one.current.classList.add('out');
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
          그와 눈이 마주치자, 그/그녀가 하는 말은?
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
          나를 후원하러 온 성좌가 두 명 있다고 한다! 누구일까?
        </div>
      </div>
    );
  }

  return (
    <div>
      <div ref={one}></div>
    </div>
  );
};

export default LeftSeven;
