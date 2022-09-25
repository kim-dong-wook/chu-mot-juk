import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';

const RightThree = () => {
  return (
    <div
      className="w-full h-full right_book_page"
      style={{ backgroundImage: `url(${background})` }}
    >
      3
    </div>
  );
};

export default RightThree;
