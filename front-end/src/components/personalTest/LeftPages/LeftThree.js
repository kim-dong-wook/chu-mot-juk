import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';
const LeftThree = () => {
  return (
    <div
      className="w-full h-full right_book_page bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      Left3
    </div>
  );
};

export default LeftThree;
