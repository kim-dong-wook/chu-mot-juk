import React from 'react';
import VsStart from '../components/VS/VsStart';
import { useRecoilState } from 'recoil';
import { roundState } from '../stores/atom';
import VsMain from '../components/VS/VsMain';
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
const VsPage = () => {
  const [round, setRound] = useRecoilState(roundState);

  useEffect(() => {
    setRound(0);
  }, []);

  return <div>{round === 0 ? <VsStart /> : <VsMain />}</div>;
};

export default VsPage;
