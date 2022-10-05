import React from 'react';
import TagsComponent from './TagsComponent';
import './TagSearch.css';
import { useNavigate } from 'react-router-dom';
const BookListComponent = ({ books }) => {
  const navigate = useNavigate();
  const onClickBook = (novelNo) => {
    navigate('/detail/' + novelNo);
  };
  return (
    <div className="flex w-full h-[29rem] my-4">
      {books.map((book) => (
        <div className="w-[18%] h-[100%]  mr-7">
          <div className="w-full h-[66%]  rounded-xl">
            <img
              src={book.novelThumbnail}
              alt=""
              className="w-full h-full rounded-xl cursor-pointer hover:scale-125 duration-200"
              onClick={() => onClickBook(book.novelNo)}
            ></img>
          </div>
          <div
            className="text-lg w-full bookName mt-3 h-10 cursor-pointer"
            onClick={() => onClickBook(book.novelNo)}
          >
            {book.novelTitle}
          </div>
          <TagsComponent novelNo={book.novelNo}></TagsComponent>
        </div>
      ))}
    </div>
  );
};

export default BookListComponent;
