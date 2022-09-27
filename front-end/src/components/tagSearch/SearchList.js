import React, { useState, useEffect } from 'react';
import PageComponent from './PageComponent';

const SearchList = ({ books }) => {
  const [size, setSize] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [pageOffset, setPageOffset] = useState(0);

  const onClickPage = (page) => {
    setCurrentPage(page);
  };

  const onClickNext = () => {
    if (currentPage !== totalPage.length) {
      if (currentPage % 10 === 0) {
        setPageOffset(pageOffset + 1);
      }
      setCurrentPage(currentPage + 1);
    }
  };

  const onClickPrev = () => {
    if (currentPage !== 1) {
      if (currentPage % 10 === 1) {
        setPageOffset(pageOffset - 1);
      }
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setSize(books.length);
    let totalPages = [];
    for (let i = 1; i <= books.length / 20 + 1; i++) {
      totalPages.push(i);
    }
    setTotalPage(totalPages);
  }, [books]);

  return (
    <div className="w-full h-full mt-8">
      <div className="text-xl mb-4">총 {size}건의 작품이 있습니다.</div>

      <PageComponent books={books} page={currentPage}></PageComponent>
      <div className="w-full h-20 flex justify-center items-center">
        <span
          target="_self"
          className="inline-block items-center mr-0.5 text-m whitespace-nowrap rounded-full bg-primary-3 px-3 py-2 text-primary-1 cursor-default"
        >
          <span
            className="mr-4 hover:text-primary-4 cursor-pointer"
            onClick={onClickPrev}
          >
            이전
          </span>
          {totalPage
            .slice(pageOffset * 10, (pageOffset + 1) * 10)
            .map((page) => (
              <span
                className={`hover:text-primary-4 cursor-pointer mx-2
              ${currentPage === page ? 'text-primary-4' : ''}
              `}
                onClick={() => onClickPage(page)}
              >
                {page}
              </span>
            ))}
          <span
            className="ml-4 hover:text-primary-4 cursor-pointer"
            onClick={onClickNext}
          >
            다음
          </span>
        </span>
      </div>
    </div>
  );
};

export default SearchList;
