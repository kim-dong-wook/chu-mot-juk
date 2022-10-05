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
        <div className="w-[18%] h-full" style={{ perspective: '500px' }}>
          <div key={book.novelNo} className="bookc w-full h-full">
            <div className="book flex-col" key={book.novelNo}>
              <img
                key={book.novelNo}
                src={book.novelThumbnail}
                alt=""
                onClick={onClickDetail}
              ></img>
            </div>
          </div>
          <div className="text-lg mt-2 bookName">{book.novelTitle}</div>
          <div>
            별점 <span>조회수</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
