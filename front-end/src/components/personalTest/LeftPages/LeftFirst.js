import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState } from '../../../stores/atom';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftFirst = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  useEffect(() => {
    if (testPage === 0) {
      one.current.classList.add('one');
      two.current.classList.add('two');
      three.current.classList.add('three');
    }
  }, [testPage]);
  return (
    <div
      className="w-full h-full right_book_page bg-cover flex flex-col items-center justify-center space-y-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-xl opacity-0" ref={one}>
        어느날 소설 속에 떨어졌다..
      </div>
      <div className="text-xl opacity-0" ref={two}>
        눈을 떠보니
      </div>
      <div className="text-xl opacity-0" ref={three}>
        여긴 어디지?
      </div>
    </div>
  );
};

export default LeftFirst;
