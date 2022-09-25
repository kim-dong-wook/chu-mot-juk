import React from 'react';
import background from '../../../assets/images/test/TestImg1.jpg';

const RightSecond = () => {
  return (
    <div
      className="w-full h-full right_book_page"
      style={{ backgroundImage: `url(${background})` }}
    >
      2
    </div>
  );
};

export default RightSecond;
