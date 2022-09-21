import React from 'react';
import './book.css';
import './book.scss';
const BookList = ({ number, books }) => {
  return (
    <div className="w-full h-full flex justify-between overflow-visible books">
      {books.slice(5 * number, 5 * (number + 1)).map((book) => (
        <div className="bookc w-[18%] h-full">
          <div className="book">
            {' '}
            <img src={book.src} alt=""></img>
          </div>{' '}
        </div>
      ))}
    </div>
  );
};

export default BookList;
