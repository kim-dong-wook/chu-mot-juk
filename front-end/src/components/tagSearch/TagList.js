import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tagsState } from '../../stores/atom';
import { getGenreTag } from '../../api/API';
import $ from 'jquery';

import './TagSearch.css';
const TagList = ({ genre, category, tagType }) => {
  const [selected, setSelected] = useRecoilState(tagsState);
  const [hidden, setHidden] = useState(false);
  const [tags, setTags] = useState([]);
  const onClickToggle = () => {
    setHidden(!hidden);
  };

  const onClickTag = (e, tag) => {
    if (!e.target.classList.contains('toggled')) {
      e.target.classList.add('toggled');
      e.target.classList.remove('text-primary-4');
      e.target.classList.add('text-white');
      setSelected([...selected].concat(tag.tagNo));
    } else {
      e.target.classList.remove('toggled');
      e.target.classList.remove('text-white');
      e.target.classList.add('text-primary-4');
      setSelected(selected.filter((no) => no !== tag.tagNo));
    }
  };
  useEffect(() => {
    setHidden(false);
    const fetchData = async () => {
      const result = await getGenreTag(genre, tagType);
      setTags(result.data);
    };
    fetchData();
  }, [genre]);

  if (!tags) {
    return null;
  }

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
        {tags.map((tag) => (
          <span
            key={tag.tagNo}
            target="_self"
            className="inline-block items-center text-m whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 hover:scale-105 hover:shadow m-2 cursor-pointer"
            onClick={(event) => onClickTag(event, tag)}
          >
            #{tag.tagName}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList;
