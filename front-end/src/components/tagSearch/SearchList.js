import React, { useState, useEffect } from 'react';
import PageComponent from './PageComponent';

const SearchList = ({ books }) => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setSize(books.length);
  }, [books]);

  return (
    <div className="w-full h-full border-2 mt-8 border-black">
      <div>
        <div className="text-xl">총 {size}건의 작품이 있습니다.</div>
      </div>
      <PageComponent books={books} page={page}></PageComponent>
      <div className="w-full border-2 border-black">페이지네이션 버튼</div>
    </div>
  );
};

export default SearchList;
