import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { testState, testPageState } from '../../stores/atom';
import { getBookResult } from '../../api/API';
import background from '../../assets/images/test/TestBackground.jpg';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

const PersonalTestResult = () => {
  const [tags, setTags] = useRecoilState(testState);
  const [testPage, setTestPage] = useRecoilState(testPageState);
  const [results, setResults] = useState(null);
  const [selectors, setSelctors] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Button color="secondary" size="small" onClick={handleClose}>
      되돌리기
    </Button>
  );

  const onClickRestart = () => {
    navigate('/testintro');
  };

  const onClickTag = (name) => {
    let number = -1;
    tags.forEach((tag) => {
      if (tag.name === name) {
        number = tag.number;
      }
    });
    console.log('선호 태그 등록 : ' + name);
    handleClick();
  };

  useEffect(() => {
    setTestPage(-1);
    let names = new Set();
    let numbers = [];
    let temp = [];
    tags.forEach((tag) => {
      numbers.push(tag.number);
      names.add(tag.name);
    });
    const fetchData = async () => {
      const result = await getBookResult(numbers);
      names.forEach((name) => {
        temp.push(name);
      });
      setSelctors(temp);
      setResults(result.data);
    };
    fetchData();
  }, []);
  if (!results) {
    return (
      <div
        className="h-[873px] flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-[90%] h-[90%] flex items-center justify-center bg-primary-1/50 backdrop-blur-sm rounded-3xl">
          {/* {results.map((tag, index) => (
          <div key={index}>{tag}</div>
        ))} */}
        </div>
      </div>
    );
  }
  return (
    <div
      className="h-[873px] flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-[90%] h-[90%] flex items-center justify-between bg-primary-1/50 backdrop-blur-sm rounded-3xl p-20">
        <div className="w-[30%] h-full">
          <img
            src={results[0].novelThumbnail}
            alt=""
            className="h-full w-full"
          ></img>
        </div>
        <div className="w-[65%] h-full flex flex-col justify-between">
          <div className="text-3xl mb-5">{results[0].novelTitle}</div>
          <div className="text-2xl">이 책의 줄거리.. </div>
          <div className="text-lg mb-5">{results[0].novelIntro}</div>
          <div className="text-xl">
            검사 결과... 당신의 취향은?{' (※클릭시 선호태그로 등록됩니다)'}{' '}
          </div>
          <div className="inline">
            {selectors.map((tag, index) => (
              <span
                id={index}
                target="_self"
                className="inline-block items-center mr-0.5 text-sm whitespace-nowrap rounded-full bg-primary-2 px-3 py-2 text-primary-4 m-2 cursor-pointer hover:bg-primary-3"
                onClick={() => onClickTag(tag)}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex text-xl mt-20 justify-between">
            <div>
              이 작품이 궁금하다면?
              <span className="ml-2 hover:text-primary-3 cursor-pointer">
                보러가기{' '}
              </span>
            </div>
            <div
              className="hover:text-primary-3 cursor-pointer"
              onClick={onClickRestart}
            >
              다시하기
            </div>
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              message="태그가 등록되었습니다."
              action={action}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTestResult;
