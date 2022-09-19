import React from 'react';
import { useLocation } from 'react-router-dom';
const VsResultPage = () => {
  const location = useLocation();
  const book = location.state.book;
  return <div>{`${JSON.stringify(book)}`}</div>;
};

export default VsResultPage;
