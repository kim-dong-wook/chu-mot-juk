import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { roundState } from '../../stores/atom';
import { useNavigate } from 'react-router-dom';
import './Book.css';
import './VS.css';
import $ from 'jquery';
import bookSide from '../../assets/images/sideBook1.png';
import goldBorder from '../../assets/images/gold1.png';
import intro from '../../assets/images/vs/VSimg1.jpg';
import VSimg from '../../assets/images/vs/VSimg5.png';

const VsMain = () => {
  const [round, setRound] = useRecoilState(roundState);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [startBooks, setStartBooks] = useState([]);
  const [left, setLeft] = useState();
  const [right, setRight] = useState(false);
  const navigate = useNavigate();
  const sideBookPath = bookSide;
  const goldBorderPath = goldBorder;
  let books = [
    {
      id: 1,
      title: '1',
      character: '김독자',
      src: 'https://img.ridicdn.net/cover/4621001638/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 2,
      title: '2',
      character: '이독자',
      src: 'https://img.ridicdn.net/cover/1377099102/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 3,
      title: '3',
      character: '최독자',
      src: 'https://img.ridicdn.net/cover/3092017733/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 4,
      title: '4',
      character: '박독자',
      src: 'https://img.ridicdn.net/cover/1811203363/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 5,
      title: '5',
      character: '허독자',
      src: 'https://img.ridicdn.net/cover/2259009524/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 6,
      title: '6',
      character: '강독자',
      src: 'https://via.placeholder.com/485x670',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 7,
      title: '7',
      character: '송독자',
      src: 'https://via.placeholder.com/485x670',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 8,
      title: '8',
      character: '구독자',
      src: 'https://img.ridicdn.net/cover/425306513/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 9,
      title: '9',
      character: '심독자',
      src: 'https://img.ridicdn.net/cover/2008033538/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 10,
      title: '10',
      character: '배독자',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 11,
      title: '11',
      character: '손독자',
      src: 'https://img.ridicdn.net/cover/3076030032/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 12,
      title: '12',
      character: '유독자',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 13,
      title: '13',
      character: '서독자',
      src: 'https://img.ridicdn.net/cover/425297966/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 14,
      title: '14',
      character: '남독자',
      src: 'https://img.ridicdn.net/cover/425306513/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 15,
      title: '15',
      character: '봉독자',
      src: 'https://img.ridicdn.net/cover/2259009524/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
    },
    {
      id: 16,
      title: '16',
      character: '추독자',
      src: 'https://img.ridicdn.net/cover/2065072847/xxlarge#1',
      tags: ['사랑', '서양풍', '슬픔', '무협', '회귀물', '무서움', '동양'],
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
      $('#left').removeClass('bookFadeIn');
      $('#left').width = $('#left').width();
      $('#left').addClass('bookFadeIn');
      $('#right').removeClass('bookFadeIn');
      $('#right').width = $('#right').width();
      $('#right').addClass('bookFadeIn');
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
      $('#left').removeClass('bookFadeIn');
      $('#left').width = $('#left').width();
      $('#left').addClass('bookFadeIn');
      $('#right').removeClass('bookFadeIn');
      $('#right').width = $('#right').width();
      $('#right').addClass('bookFadeIn');
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
    <div className="h-screen mt-[-4rem] flex justify-center items-center flex-col bg-cover">
      <div className="border-2 border-black w-[30%] h-[10%] flex items-center justify-center text-2xl">
        {round === 2 ? (
          <div>웹소설 이상형 월드컵 결승전</div>
        ) : (
          <div>
            웹소설 이상형 월드컵 {round}강 {current + 1}/{round / 2}
          </div>
        )}
      </div>
      <div className="w-[80%] h-[80%] flex justify-center items-center bg-contain bg-no-repeat px-20 relative ">
        <img
          src={goldBorder}
          alt=""
          className="absolute h-[100%] w-[100%]"
        ></img>
        <div
          className={`w-[30%] h-[80%] flex justify-center items-cente
          ${
            left
              ? 'translate-x-[80%] duration-700 pointer-events-none ease-in delay-200'
              : null
          }
          ${right ? 'scale-0 duration-700 z-20' : null}`}
        >
          <div
            id="left"
            class="ud_book_box"
            className="w-[100%] h-[100%] bookFadeIn"
          >
            <div class="ud_book">
              <img
                className={`w-[100%] h-[100%] `}
                src={startBooks[2 * current] ? startBooks[2 * current].src : ''}
                alt=""
                onClick={() => onClickLeft(startBooks[2 * current].id)}
              ></img>
              <div class="ud_ruckseite">
                <img
                  className={`w-[100%] h-[100%]`}
                  src={sideBookPath}
                  alt=""
                  onClick={() => onClickLeft(startBooks[2 * current].id)}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
          ${left ? 'invisible' : null} ${right ? 'invisible' : null}
          `}
        >
          <img src={VSimg} alt="" className="invert" />
        </div>
        <div
          className={`w-[30%] h-[80%] flex justify-center items-cente
          ${
            right
              ? 'translate-x-[-80%] duration-700 pointer-events-none ease-in delay-200'
              : null
          }
          ${left ? 'scale-0 duration-700 ' : null}`}
        >
          <div
            id="right"
            class="ud_book_box"
            className="w-[100%] h-[100%] bookFadeIn"
          >
            <div class="ud_book">
              <img
                className={`w-[100%] h-[100%]`}
                src={
                  startBooks[2 * current + 1]
                    ? startBooks[2 * current + 1].src
                    : ''
                }
                alt=""
                onClick={() => onClickRight(startBooks[2 * current + 1].id)}
              ></img>
              <div class="ud_ruckseite">
                <img
                  className={`w-[100%] h-[100%]`}
                  src={sideBookPath}
                  alt=""
                  onClick={() => onClickRight(startBooks[2 * current + 1].id)}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsMain;
