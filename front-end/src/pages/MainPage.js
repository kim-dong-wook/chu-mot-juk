import React from 'react';
import { useState, useEffect } from 'react';
import {
  getOriginals,
  getTrending,
  getTopRated,
  getNowPlaying,
  getUpcoming,
  getPopular,
} from '../api/API';

import Books from '../components/Books/Books';

const MainPage = () => {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // async function movie1() {
    //   let data = await getOriginals();
    //   setOriginals(data);
    //   console.log(data);

    //   data = await getTrending();
    //   setTrending(data);
    //   console.log(data);

    //   data = await getNowPlaying();
    //   setNowPlaying(data);
    //   console.log(data);

    //   data = await getPopular();
    //   setPopular(data);
    //   console.log(data);

    //   data = await getTopRated();
    //   setTopRated(data);
    //   console.log(data);

    //   data = await getUpcoming();
    //   setUpcoming(data);
    //   console.log(data);
    // }
    // movie1();
    const fn = async () => {
      setOriginals(await getOriginals());
      setTrending(await getTrending());
      setNowPlaying(await getTopRated());
      setPopular(await getNowPlaying());
      setTopRated(await getUpcoming());
      setUpcoming(await getPopular());
    };

    fn();
  }, []);
  useEffect(() => {
    console.log(originals);
    console.log(trending);
    console.log(nowPlaying);
    console.log(popular);
    console.log(topRated);
    console.log(upcoming);
  }, [originals, trending, nowPlaying, popular, topRated, upcoming]);
  return (
    <div>
      <Books title="이달의 신작" books={originals} />
    </div>
  );
};

export default MainPage;
