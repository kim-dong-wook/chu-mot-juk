import React from 'react';
import background from '../../assets/images/test/TestBackground.jpg';
const TestIntro = () => {
  return (
    <div
      className="h-[873px] flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default TestIntro;
