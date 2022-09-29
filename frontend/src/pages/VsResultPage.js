import React from 'react';
import { useLocation } from 'react-router-dom';
import VsResult from '../components/VS/VsResult';
const VsResultPage = () => {
  const location = useLocation();
  const winner = location.state.winner;
  return <VsResult winner={winner}></VsResult>;
};

export default VsResultPage;
