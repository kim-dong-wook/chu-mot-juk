import React from 'react';
import { useLocation } from 'react-router-dom';
import VsResult from '../components/VS/VsResult';
const VsResultPage = () => {
  const location = useLocation();
  const book = location.state.book;
  return <VsResult book={book}></VsResult>;
};

export default VsResultPage;
