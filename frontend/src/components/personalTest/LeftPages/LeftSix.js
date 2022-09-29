import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/leftPage.png';
const LeftSix = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);

  useEffect(() => {
    if (testPage === 5) {
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
          그/그녀는 나의 어떤 모습에 반했을까?
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
          아뿔싸, 나의 방심으로 내 애인과 동료들이 위험에 빠졌다!
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

export default LeftSix;
