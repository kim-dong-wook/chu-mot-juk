import React from 'react';
import TagsComponent from './TagsComponent';
import './TagSearch.css';

const BookListComponent = ({ books }) => {
  return (
    <div className="flex w-full h-[29rem] justify-between my-4">
      {books.map((book) => (
        <div className="w-[18%] h-[100%] overflow-hidden">
          <img
            src={book.novelThumbnail}
            alt=""
            className="w-full h-[66%] rounded-xl"
          ></img>
          <div className="text-lg w-full bookName mt-3 h-10">
            {book.novelTitle}
          </div>
          <TagsComponent novelNo={book.novelNo}></TagsComponent>
        </div>
      ))}
    </div>
  );
};

export default BookListComponent;
