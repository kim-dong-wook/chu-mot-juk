import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/images/star.png';
import './book.css';
import './book.scss';
const BookList = ({ number, books }) => {
  const navigate = useNavigate();
  const onClickDetail = (novelNo) => {
    navigate('/detail/' + novelNo);
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
                onClick={() => onClickDetail(book.novelNo)}
              ></img>
            </div>
          </div>
          <div className="text-xl mt-2 bookName">{book.novelTitle}</div>
          <div className="flex">
            <img className="mt-1 h-[1rem]" src={star} alt="star"></img>
            &nbsp;{'(4.7)'}&nbsp;&nbsp;
            <span>22.2만</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
