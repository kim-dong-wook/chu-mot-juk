import React from 'react';
import { useNavigate } from 'react-router-dom';
// import test from '../../assets/images/test4.jpg';
import border from '../../assets/images/vs/VSimg9.jpg';

const VsResult = ({ book }) => {
  const navigate = useNavigate();
  // const testPath = test;
  const onClickReStart = () => {
    navigate('/vsintro');
  };
  const onClickDetail = () => {
    navigate('/detail');
  };
  return (
    <div className="h-screen mt-[-4rem]">
      <div className="pt-[4rem] w-[100%] h-[100%] pl-20 bg-primary-4 flex">
        <div
          className="w-[50%] h-[100%] overflow-hidden"
          // style={{ backgroundImage: `url(${book.src})` }}
          // style={{ backgroundImage: `url(${testPath})` }}
        >
          <img src={book.src} alt="" className="w-full"></img>
        </div>
        <div className="w-[50%] h-[100%] border-l-4 border-black text-white relative">
          <img src={border} alt="" className="absolute w-full"></img>
          <div className="mt-40 mx-20 flex flex-col justify-center items-center">
            <div className="text-4xl">사용자님이 고른 최애는 ...</div>
            <div className="mt-20 text-5xl">{book.title}</div>
            <div className="mt-20 text-5xl">{book.character}</div>
            <div className="mt-32 text-2xl inline h-[12rem]">
              {book.tags.map((tag) => (
                <span className="mr-8 inline-block">#{tag}</span>
              ))}
            </div>
            <div className="w-full flex justify-between text-2xl bottom-0 cursor-pointer">
              <div
                onClick={onClickReStart}
                className="cursor-pointer hover:brightness-75"
              >
                다시하기
              </div>
              <div
                onClick={onClickDetail}
                className="cursor-pointer hover:text-primary-2"
              >
                작품 보러가기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsResult;
