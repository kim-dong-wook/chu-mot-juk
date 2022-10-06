import React, { useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { testPageState, genreState, failState } from '../../../stores/atom';
import background from '../../../assets/images/test/leftPage.png';
const FailPageOne = () => {
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [genre, setGenre] = useRecoilState(genreState);
  const [fail, setFail] = useRecoilState(failState);

  const page = useRef(null);
  const one = useRef(null);

  useEffect(() => {
    if (testPage === 400) {
      one.current.classList.add('one');
      one.current.classList.add('z-50');
    } else {
      one.current.classList.remove('one');
      one.current.classList.add('out');
    }
  }, [testPage]);

  useEffect(() => {});
  return (
    <div
      className="w-full h-full right_book_page bg-cover text-2xl flex flex-col items-center justify-center space-y-10"
      style={{ backgroundImage: `url(${background})` }}
      ref={page}
    >
      <div className="text-center out text-red-400" ref={one}>
        {fail === 'code-1' ? (
          <div>
            당신은 반찬을 주러 오신 어머니에게 들켜 <br></br>등짝 스매쉬를 맞아
            죽었습니다.
          </div>
        ) : fail === 'code-2' ? (
          <div>당신은 빨리 눈을 깔지 않아 죽었습니다.</div>
        ) : fail === 'code-3' ? (
          <div>
            그를 따라간 이후로 소식이 전해지지 않고 있습니다… <br></br>
            {'(조상님께 바치는 성의로 재산을 탕진하여 사망)'}
          </div>
        ) : fail === 'code-4' ? (
          <div>
            "죽음"
            <br></br>
            "사유 : 퀘스트에 응하지 않았습니다.
            <br></br>
            시스템은 시스템에 불응하는 자를
            <br></br>가만 두지 않을 것입니다."
          </div>
        ) : fail === 'code-5' ? (
          <div>
            "회귀"<br></br>
            [시스템] : 당신은 비겁합니다.
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default FailPageOne;
