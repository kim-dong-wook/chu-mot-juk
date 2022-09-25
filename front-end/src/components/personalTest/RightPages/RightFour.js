import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';

const RightFour = () => {
  return (
    <div
      className="w-full h-full right_book_page"
      style={{ backgroundImage: `url(${background})` }}
    >
      4
    </div>
  );
};

export default RightFour;
