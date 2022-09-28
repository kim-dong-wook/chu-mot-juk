import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../../stores/atom';
import background from '../../../assets/images/test/leftPage.png';
const LeftFirst = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const page = useRef(null);
  const one = useRef(null);
  useEffect(() => {
    if (testPage === 0) {
      one.current.classList.add('one');
    } else {
      one.current.classList.remove('one');
      one.current.classList.add('out');
    }
  }, [testPage]);
  return (
    <div
      className="w-full h-full right_book_page bg-cover flex flex-col items-center justify-center space-y-10"
      style={{ backgroundImage: `url(${background})` }}
      ref={page}
    >
      <div className="text-3xl out" ref={one}>
        당신에게 더 중요한 것은?
      </div>
    </div>
  );
};

export default LeftFirst;
