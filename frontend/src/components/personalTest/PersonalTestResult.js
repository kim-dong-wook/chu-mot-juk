import React from 'react';
import background from '../../assets/images/test/TestBackground.jpg';
const PersonalTestResult = () => {
  return (
    <div
      className="h-[873px] flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-[90%] h-[90%] flex items-center justify-center bg-primary-1/50 backdrop-blur-sm rounded-3xl"></div>
    </div>
  );
};

export default PersonalTestResult;
