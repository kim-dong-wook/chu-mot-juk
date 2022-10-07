import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import test from '../../assets/images/test4.jpg';
import border from '../../assets/images/vs/VSimg9.jpg';
import result from '../../assets/videos/result.mp4';
import { getBook } from '../../api/API';
const VsResult = ({ winner }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const videoElement = useRef(null);
  // const testPath = test;
  const onClickReStart = () => {
    navigate('/vsintro');
  };
  const onClickDetail = (novelNo) => {
    navigate('/detail/' + novelNo);
  };
  useEffect(() => {
    console.log(winner);
    const fetchData = async () => {
      const result = await getBook(winner.novelNo);
      setBook(result.data);
    };
    fetchData();
    let fn = setTimeout(() => {
      videoElement.current.play();
    }, 1000);
  }, []);
  if (!book) {
    return null;
  }
  return (
    <div className="h-screen mt-[-4rem]">
      <div className="pt-[4rem] w-[100%] h-[100%] bg-primary-4 flex relative overflow-hidden justify-between">
        <div className="w-[30%] h-[100%] overflow-hidden z-20 m-36 ml-52">
          <img src={winner.pic} alt="" className="w-full"></img>
        </div>
        <video className="absolute" ref={videoElement} autoplay muted loop>
          <source src={result} type="video/mp4" />
        </video>
        <div className="w-[50%] h-[100%] text-white relative">
          <img src={border} alt="" className="absolute w-full"></img>
          <div className="mt-40 mx-20 flex flex-col justify-center items-center">
            <div className="text-4xl">당신의 이상형이 살고있는 곳은...</div>
            <div className="mt-20 text-5xl">{winner.novelName}</div>
            <div className="mt-20 text-5xl">{winner.chName}</div>
            <div className="mt-32 text-2xl inline h-[12rem]">
              {book.tagNames.slice(0, 14).map((tag) => (
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
                onClick={() => onClickDetail(book.novelNo)}
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
