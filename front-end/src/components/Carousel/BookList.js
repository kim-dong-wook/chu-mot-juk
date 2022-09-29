import React from 'react';
import { useNavigate } from 'react-router-dom';
import './book.css';
import './book.scss';
const BookList = ({ number, books }) => {
  const navigate = useNavigate();
  const onClickDetail = () => {
    navigate('/detail');
  };
  return (
    <div className="w-full h-full flex justify-between overflow-visible books">
      {books.slice(5 * number, 5 * (number + 1)).map((book) => (
        <div key={book.novelNo} className="bookc w-[18%] h-full">
          <div className="book" key={book.novelNo}>
            {' '}
            <img
              key={book.novelNo}
              src={book.novelThumbnail}
              alt=""
              onClick={onClickDetail}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
