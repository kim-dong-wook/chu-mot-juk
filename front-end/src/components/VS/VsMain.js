import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { roundState } from '../../stores/atom';
import { useNavigate } from 'react-router-dom';

const VsMain = () => {
  const [round, setRound] = useRecoilState(roundState);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [startBooks, setStartBooks] = useState([]);
  const [left, setLeft] = useState();
  const [right, setRight] = useState(false);
  const navigate = useNavigate();

  let books = [
    {
      id: 1,
      name: '1',
      src: 'https://img.ridicdn.net/cover/4621001638/xxlarge#1',
    },
    {
      id: 2,
      name: '2',
      src: 'https://img.ridicdn.net/cover/1377099102/xxlarge#1',
    },
    {
      id: 3,
      name: '3',
      src: 'https://img.ridicdn.net/cover/3092017733/xxlarge#1',
    },
    {
      id: 4,
      name: '4',
      src: 'https://img.ridicdn.net/cover/1811203363/xxlarge#1',
    },
    {
      id: 5,
      name: '5',
      src: 'https://img.ridicdn.net/cover/2259009524/xxlarge#1',
    },
    {
      id: 6,
      name: '6',
      src: 'https://via.placeholder.com/485x670',
    },
    {
      id: 7,
      name: '7',
      src: 'https://via.placeholder.com/485x670',
    },
    {
      id: 8,
      name: '8',
      src: 'https://img.ridicdn.net/cover/425306513/xxlarge#1',
    },
    {
      id: 9,
      name: '9',
      src: 'https://img.ridicdn.net/cover/2008033538/xxlarge#1',
    },
    {
      id: 10,
      name: '10',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
    },
    {
      id: 11,
      name: '11',
      src: 'https://img.ridicdn.net/cover/3076030032/xxlarge#1',
    },
    {
      id: 12,
      name: '12',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
    },
    {
      id: 13,
      name: '13',
      src: 'https://img.ridicdn.net/cover/425297966/xxlarge#1',
    },
    {
      id: 14,
      name: '14',
      src: 'https://img.ridicdn.net/cover/425306513/xxlarge#1',
    },
    {
      id: 15,
      name: '15',
      src: 'https://img.ridicdn.net/cover/2259009524/xxlarge#1',
    },
    {
      id: 16,
      name: '16',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
    },
  ];

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

  const onClickLeft = (id) => {
    setLeft(true);
    const book = startBooks.filter((book) => book.id === id)[0];
    setSelected(selected.concat(book));

    let fn = setTimeout(() => {
      if (current + 1 === 1 && round === 2) {
        navigate('/vsresult', {
          state: {
            book,
          },
        });
      } else {
        setCurrent(current + 1);
        setLeft(false);
      }
    }, 1500);
  };

  const onClickRight = (id) => {
    setRight(true);
    const book = startBooks.filter((book) => book.id === id)[0];
    setSelected(selected.concat(book));

    let fn = setTimeout(() => {
      if (current + 1 === 1 && round === 2) {
        navigate('/vsresult', {
          state: {
            book,
          },
        });
      } else {
        setCurrent(current + 1);
        setRight(false);
      }
    }, 1500);
  };

  useEffect(() => {
    mixBooks(books);
    console.log(temp);
    setStartBooks(temp);
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
    <div className="w-screen h-screen relative mt-[-4rem] ">
      <div className=" absolute w-full h-16 bg-slate-300 flex items-center justify-center z-20 opacity-70">
        {round === 2 ? (
          <div>웹소설 이상형 월드컵 결승전</div>
        ) : (
          <div>
            웹소설 이상형 월드컵 {round}강 {current + 1}/{round / 2}
          </div>
        )}
      </div>
      <div className="absolute w-full h-full">
        <img
          className={`absolute w-6/12 h-full
          ${left ? 'translate-x-[50%] duration-300' : null}
          ${right ? 'translate-x-[-100%] duration-300' : null}
          `}
          src={startBooks[2 * current] ? startBooks[2 * current].src : ''}
          alt=""
          onClick={() => onClickLeft(startBooks[2 * current].id)}
        ></img>
        <div
          className={`absolute w-24 inset-1/2 translate-x-[-50%] text-8xl z-20 text-white
          ${left ? 'hidden' : null}
          ${right ? 'hidden' : null}`}
        >
          vs
        </div>
        <img
          className={`absolute w-6/12 h-full translate-x-[100%]
          ${left ? 'translate-x-[200%] duration-300' : null}
          ${right ? 'translate-x-[49.9%] duration-300' : null}
          `}
          src={
            startBooks[2 * current + 1] ? startBooks[2 * current + 1].src : ''
          }
          alt=""
          onClick={() => onClickRight(startBooks[2 * current + 1].id)}
        ></img>
      </div>
    </div>
  );
};

export default VsMain;
