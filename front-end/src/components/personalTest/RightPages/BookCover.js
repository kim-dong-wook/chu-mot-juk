import React from 'react';
import cover from '../../../assets/images/test/Testimg3.png';
const BookCover = () => {
  return (
    <div
      className="w-full h-full right_book_page bg-cover"
      style={{ backgroundImage: `url(${cover})` }}
    ></div>
  );
};

export default BookCover;
