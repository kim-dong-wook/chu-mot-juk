import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftFive = () => {
  return (
    <div
      className="w-full h-full right_book_page bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      Left5
    </div>
  );
};

export default LeftFive;
