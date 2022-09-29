import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { roundState } from '../../stores/atom';

import intro from '../../assets/images/vs/VSimg1.jpg';
import intro2 from '../../assets/images/vs/VSimg3.png';
import intro3 from '../../assets/images/vs/VSimg4.png';
import 'tailwindcss/tailwind.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const VsStart = () => {
  const [round, setRound] = useRecoilState(roundState);
  const [books, setBooks] = useState(round);
  const box = useRef(null);

  const handleChange = (e) => {
    setBooks(e.target.value);
  };

  const onClick = () => {
    box.current.classList.remove('animate__fadeInUpBig');
    box.current.classList.add('animate__fadeOutDownBig');
    let fn = setTimeout(() => {
      setRound(books);
    }, 900);
  };

  useEffect(() => {
    setRound(0);
    box.current.classList.add('animate__animated');
    box.current.classList.add('animate__fadeInUpBig');
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center mt-[-4rem] bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${intro})` }}
    >
      <div
        className="h-[30rem] w-[40rem] border-2 border-primary-4 flex justify-center items-center flex-col bg-gradient-to-br from-primary-2 to-primary-3 rounded-lg space-y-8"
        ref={box}
      >
        <img src={intro2} alt="" className="w-[20%]" />
        <div className="bg-primary-1 w-10/12 h-[11rem] space-y-4 p-4 rounded-lg text-xl">
          <div className="font-bold">총 라운드를 선택하세요.</div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">라운드</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={books}
                label="books"
                onChange={handleChange}
              >
                <MenuItem value={2}>2강</MenuItem>
                <MenuItem value={4}>4강</MenuItem>
                <MenuItem value={8}>8강</MenuItem>
                <MenuItem value={16}>16강</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div>총 16명의 후보 중 무작위 {books}명이 대결합니다.</div>
        </div>
        <div className="bg-primary-2 rounded-3xl p-2 hover:brightness-125 duration-200 h-[15%] flex items-center justifty-center">
          <img src={intro3} alt="" onClick={onClick} className="h-[90%]"></img>
        </div>
      </div>
    </div>
  );
};

export default VsStart;
