import React, { useState } from 'react';

import './TagSearch.css';
const TagList = ({ category, height }) => {
  const [hidden, setHidden] = useState(false);
  const onClickToggle = () => {
    setHidden(!hidden);
  };

  const onClickTag = (e) => {
    console.log(e);
    if (!e.target.classList.contains('toggled')) {
      e.target.classList.add('toggled');
      e.target.classList.remove('text-primary-4');
      e.target.classList.add('text-white');
    } else {
      e.target.classList.remove('toggled');
      e.target.classList.remove('text-white');
      e.target.classList.add('text-primary-4');
    }
  };
  const tags = [
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
  ];
  return (
    <div
      className={`w-full
    `}
    >
      <div className="flex justify-between mb-4">
        <div className="text-2xl">{category}</div>
        <div className="text-lg" onClick={onClickToggle}>
          {hidden ? '전체 보기' : '숨기기'}
        </div>
      </div>
      <div className={`${hidden ? 'hidden' : ''} inline`}>
        {tags.map((tag, index) => (
          <span
            id={index}
            target="_self"
            className="inline-block items-center text-m whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 hover:scale-105 hover:shadow m-2 cursor-pointer"
            onClick={onClickTag}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
