import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState } from '../../../stores/atom';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftEight = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const page = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  useEffect(() => {
    if (testPage === 7) {
      one.current.classList.add('one');
      two.current.classList.add('two');
      three.current.classList.add('three');
      four.current.classList.add('four');
    } else {
      one.current.classList.remove('one');
      two.current.classList.remove('two');
      three.current.classList.remove('three');
      four.current.classList.remove('four');
      one.current.classList.add('out');
      two.current.classList.add('out');
      three.current.classList.add('out');
      four.current.classList.add('out');
    }
  }, [testPage]);

  return (
    <div
      className="w-full h-full right_book_page bg-cover text-2xl flex flex-col items-center justify-center space-y-10"
      style={{ backgroundImage: `url(${background})` }}
      ref={page}
    >
      <div className="out text-center" ref={one}>
        같이 길을 걷던 중, 어지러움을 느끼며 쓰러졌다. <br></br>옆에서 다급하게
        나를 부르는 목소리가 서서히 사라진다.
      </div>
      <div className="out" ref={two}>
        “저기요!, 괜찮으세요??”
      </div>
      <div className="text-center out" ref={three}>
        모르는 사람이 나를 흔들어 깨운다.
        <br></br>방금 일은 꿈이였나..?
      </div>
      <div className="text-center out" ref={four}>
        감사인사를 전하고 일어서려는 그때<br></br>방금 읽었던 책이 떠올랐다…
      </div>
    </div>
  );
};

export default LeftEight;
