import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import MainVideo from '../MainVideo';
import RightPath from '../../assets/images/bt_right.png';
import LeftPath from '../../assets/images/bt_left.png';
const VideoCarousel = () => {
  const [prev, setPrev] = useState(4);
  const [active, setActive] = useState(0);
  const [next, setNext] = useState(1);
  const Ids = [0, 1, 2, 3, 4, 5];
  const right = RightPath;
  const left = LeftPath;
  const onPrev = () => {
    setNext(active);
    setActive(prev);
    setPrev(prev - 1 === -1 ? Ids.length - 1 : prev - 1);
  };
  const onNext = () => {
    setPrev(active);
    setActive(next);
    setNext(next + 1 === Ids.length ? 0 : next + 1);
  };

  const onIndicator = (id) => {
    console.log(id);
    setPrev(id - 1 === -1 ? Ids.length - 1 : id - 1);
    setActive(id);
    setNext(id + 1 === Ids.length ? 0 : id + 1);
  };
  return (
    <div className="p-20 border-2 border-black relative w-screen h-[600px] overflow-y">
      <img
        onClick={onPrev}
        src={left}
        // bg-white
        className="absolute w-20 h-20 inset-2/4 translate-x-[-484px] translate-y-[-50%] z-20 rounded-full cursor-pointer opacity-70 hover:opacity-100"
        alt=""
      ></img>
      {Ids.map((id) => (
        <div
          id={id}
          className={`absolute w-[888px] h-[500px] inset-2/4 translate-x-[-50%] translate-y-[-50%] ease-in-out duration-700 rounded-3xl overflow-hidden
          ${
            prev === id
              ? 'translate-x-[-90%] bg-slate-500 scale-75 opacity-50'
              : next === id
              ? 'translate-x-[-10%] bg-slate-500 scale-75 opacity-50'
              : active === id
              ? 'translate-x-[-50%] bg-slate-300 z-10'
              : 'translate-x-[-50%] scale-50 opacity-0'
          }`}
        >
          <MainVideo></MainVideo>
        </div>
      ))}

      <img
        onClick={onNext}
        src={right}
        // bg-white
        className="absolute w-20 h-20 inset-2/4 translate-x-[404px] translate-y-[-50%] z-20  rounded-full cursor-pointer opacity-70 hover:opacity-100"
        alt=""
      ></img>
      <div className="absolute flex space-x-3 absolute bottom-0 p-4 inset-x-2/4 w-44 translate-x-[-50%]">
        {Ids.map((id) => (
          <div
            id={id}
            className={`h-3 w-3 bg-gray-300 rounded-full
          ${active === id ? 'bg-gray-500' : ''}`}
            onClick={() => onIndicator(id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
