import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftSecond = () => {
  return (
    <div
      className="w-full h-full right_book_page bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      Left2
    </div>
  );
};

export default LeftSecond;
