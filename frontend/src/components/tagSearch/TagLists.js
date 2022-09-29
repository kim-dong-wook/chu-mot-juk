import React from 'react';
import { useEffect } from 'react';
import TagList from './TagList';

const TagLists = ({ genre }) => {
  useEffect(() => {
    console.log(genre);
  }, [genre]);
  if (genre === '로맨스') {
    return (
      <>
        <TagList genre={genre} category="장르" tagType={1} index={1}></TagList>
        <TagList genre={genre} category="소재" tagType={2} index={2}></TagList>
        <TagList genre={genre} category="남주" tagType={3} index={3}></TagList>
        <TagList genre={genre} category="여주" tagType={4} index={4}></TagList>
        <TagList genre={genre} category="관계" tagType={5} index={5}></TagList>
        <TagList
          genre={genre}
          category="분위기/기타"
          tagType={6}
          index={6}
        ></TagList>
      </>
    );
  } else if (genre === '판타지') {
    return (
      <>
        <TagList genre={genre} category="장르" tagType={1}></TagList>
        <TagList genre={genre} category="스토리" tagType={2}></TagList>
        <TagList genre={genre} category="직업/소재" tagType={3}></TagList>
        <TagList genre={genre} category="분위기/기타" tagType={4}></TagList>
      </>
    );
  } else if (genre === 'BL') {
    return (
      <>
        <TagList genre={genre} category="장르" tagType={1}></TagList>
        <TagList genre={genre} category="소재" tagType={2}></TagList>
        <TagList genre={genre} category="공" tagType={3}></TagList>
        <TagList genre={genre} category="수" tagType={4}></TagList>
        <TagList genre={genre} category="관계" tagType={5}></TagList>
        <TagList genre={genre} category="분위기/기타" tagType={6}></TagList>
      </>
    );
  }
};

export default TagLists;
