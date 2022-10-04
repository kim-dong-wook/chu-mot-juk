import React from 'react';
import './Loading.css';
import Spinner from '../assets/images/LoadingSpinner.gif';
export const Loading = () => {
  return (
    <div className="Loading">
      <div className="LoadingText">Loading</div>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};

export default Loading;
