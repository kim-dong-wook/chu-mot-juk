import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { roundState } from '../../stores/atom';
import { useNavigate } from 'react-router-dom';
import { getWCInfo } from '../../api/API';

import './Book.css';
import './VS.css';
import $ from 'jquery';
import bookSide from '../../assets/images/sideBook1.png';
import border from '../../assets/images/vs/VSimg10.jpg';
import mainBack from '../../assets/images/vs/VSimg6.jpg';
import VSimg from '../../assets/images/vs/VSimg5.png';
import VStitle from '../../assets/images/vs/VSimg7.png';

import './VS.scss';

const VsMain = () => {
  const [data, setData] = useState([]);
  const [round, setRound] = useRecoilState(roundState);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [startBooks, setStartBooks] = useState([]);
  // const [left, setLeft] = useState();
  // const [right, setRight] = useState(false);
  const navigate = useNavigate();
  const left = useRef(null);
  const right = useRef(null);
  const box = useRef(null);
  const sideBookPath = bookSide;
  const borderPath = border;
  const background = mainBack;

  let temp = [];

  const mixBooks = (starts) => {
    let max = starts.length - 1;
    for (let i = max; i >= 0; i--) {
      const randIndex = Math.floor(Math.random() * i);
      temp.push(starts[randIndex]);
      starts.splice(randIndex, 1);
    }
    temp.slice(0, round);
  };

  const onClick = (wcNo, side) => {
    const winner = startBooks.filter((book) => book.wcNo === wcNo)[0];
    setSelected(selected.concat(winner));
    right.current.classList.remove('animate__zoomIn');
    left.current.classList.remove('animate__zoomIn');

    if (side === 'left') {
      right.current.classList.add('animate__zoomOutRight');
      left.current.classList.add('pointer-events-none');
      left.current.classList.add('animate__bounce');
    } else if (side === 'right') {
      left.current.classList.add('animate__zoomOutLeft');
      right.current.classList.add('pointer-events-none');
      right.current.classList.add('animate__bounce');
    }

    let fn = setTimeout(() => {
      left.current.classList.remove('animate__bounce');
      right.current.classList.remove('animate__bounce');
      if (side === 'left') {
        left.current.classList.remove('pointer-events-none');
        right.current.classList.remove('animate__zoomOutRight');
      } else if (side === 'right') {
        right.current.classList.remove('pointer-events-none');

        left.current.classList.remove('animate__zoomOutLeft');
      }
      right.current.classList.add('animate__zoomIn');
      left.current.classList.add('animate__zoomIn');

      if (current + 1 === 1 && round === 2) {
        console.log(winner);
        navigate('/vsresult', {
          state: {
            winner,
          },
        });
      } else {
        setCurrent(current + 1);
      }
    }, 1500);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getWCInfo();
      setData(result.data);
      mixBooks(result.data);
    };
    fetchData();

    console.log(temp);
    setStartBooks(temp);

    box.current.classList.add('animate__animated');
    box.current.classList.add('animate__fadeInUp');

    left.current.classList.add('animate__animated');
    left.current.classList.add('animate__zoomIn');

    right.current.classList.add('animate__animated');
    right.current.classList.add('animate__zoomIn');
  }, []);

  useEffect(() => {
    console.log(startBooks);
  }, [startBooks]);

  useEffect(() => {
    if (current === round / 2) {
      console.log(selected);
      setRound(round / 2);
      mixBooks(selected);
      console.log(temp);
      setStartBooks(temp);
      setSelected([]);
      setCurrent(0);
    }
  }, [current]);

  return (
    <div
      className="h-screen mt-[-4rem] flex justify-center items-center flex-col bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>
      <span className="ball"></span>

      <div
        className="w-[80%] h-[95%] flex flex-col justify-center items-center px-20 relative "
        ref={box}
      >
        <img
          src={border}
          alt=""
          className="absolute h-[95%] w-[100%] mt-14"
        ></img>
        <div className="w-[30%] h-[17%] flex items-center justify-center text-lg z-30 translate-y-[5.3rem] relative">
          <img src={VStitle} alt="" className="absolute h-[77%]" />
          {round === 2 ? (
            <div>웹소설 이상형 월드컵 결승전</div>
          ) : (
            <div>
              웹소설 이상형 월드컵 {round}강 {current + 1}/{round / 2}
            </div>
          )}
        </div>
        <div className="w-full h-full flex relative justify-center items-center">
          <div
            className="w-[35%] h-[65%] flex justify-center items-center"
            ref={left}
          >
            <div class="ud_book_box" className="w-[100%] h-[100%]">
              <div class="ud_book">
                <img
                  className={`w-[100%] h-[100%] `}
                  src={
                    startBooks[2 * current] ? startBooks[2 * current].pic : ''
                  }
                  alt=""
                  onClick={() => onClick(startBooks[2 * current].wcNo, 'left')}
                ></img>
                <div class="ud_ruckseite">
                  <img
                    className={`w-[100%] h-[100%]`}
                    src={sideBookPath}
                    alt=""
                    onClick={() =>
                      onClick(startBooks[2 * current].wcNo, 'left')
                    }
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={VSimg} alt="" className="" />
          </div>
          <div
            className="w-[35%] h-[65%] flex justify-center items-center"
            ref={right}
          >
            <div class="ud_book_box" className="w-[100%] h-[100%]">
              <div class="ud_book">
                <img
                  className={`w-[100%] h-[100%]`}
                  src={
                    startBooks[2 * current + 1]
                      ? startBooks[2 * current + 1].pic
                      : ''
                  }
                  alt=""
                  onClick={() =>
                    onClick(startBooks[2 * current + 1].wcNo, 'right')
                  }
                ></img>
                <div class="ud_ruckseite">
                  <img
                    className={`w-[100%] h-[100%]`}
                    src={sideBookPath}
                    alt=""
                    onClick={() =>
                      onClick(startBooks[2 * current + 1].wcNo, 'right')
                    }
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsMain;
