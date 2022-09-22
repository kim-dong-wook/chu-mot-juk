import React, { useState } from 'react';
import SearchList from './SearchList';
import TagList from './TagList';

const TagSearch = () => {
  const [hidden, setHidden] = useState(true);
  const onClickToggle = () => {
    setHidden(!hidden);
  };

  const books = [
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
  ];

  return (
    <div className="w-[80rem] h-[2200px] mx-auto mt-10">
      <form>
        <div className="pointer-events-none flex items-center"></div>
        <input
          name="keyword"
          className="block w-full rounded-none bg-white py-3 pl-8 pr-3 text-xl placeholder-gray-500 focus:outline-none lg:py-6 lg:pl-10"
          placeholder="검색어를 입력하세요"
          type="search"
          value=""
        ></input>
      </form>
      <div className="w-full h-[3rem] flex justify-between items-end">
        <div className="text-3xl">키워드로 검색하기</div>
        <div className="text-xl" onClick={onClickToggle}>
          {hidden ? '전체 보기' : '숨기기'}
        </div>
      </div>
      <div className={`${hidden ? 'hidden' : ''} my-8 space-y-8`}>
        <TagList category="대분류"></TagList>
        <TagList category="중분류"></TagList>
        <TagList category="소분류"></TagList>
      </div>
      <SearchList books={books}></SearchList>
    </div>
  );
};

export default TagSearch;
