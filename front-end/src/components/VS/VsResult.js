import React from 'react';
import { useNavigate } from 'react-router-dom';
import test from '../../assets/images/test4.jpg';

const VsResult = ({ book }) => {
  const navigate = useNavigate();
  const testPath = test;
  const onClickReStart = () => {
    navigate('/vsintro');
  };

  return (
    <div className="h-screen mt-[-4rem]">
      <div className="pt-[4rem] w-[100%] h-[100%] pl-20 bg-primary-4 flex">
        <div
          className="w-[50%] h-[100%] border-2 border-black bg-no-repeat overflow-hidden"
          // style={{ backgroundImage: `url(${book.src})` }}
          // style={{ backgroundImage: `url(${testPath})` }}
        >
          <img src={book.src} alt="" className="w-full"></img>
        </div>
        <div className="w-[50%] h-[100%] border-2 border-black p-16 text-white">
          <div className="text-4xl">사용자님이 고른 최애는 ...</div>
          <div className="mt-20 text-5xl">{book.title}</div>
          <div className="mt-20 text-5xl">{book.character}</div>
          <div className="mt-40 text-2xl">
            {book.tags.map((tag) => (
              <span className="mr-8">#{tag}</span>
            ))}
          </div>
          <div className="w-full flex justify-between text-2xl mt-40">
            <div onClick={onClickReStart}>다시하기</div>
            <div>작품 보러가기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsResult;
