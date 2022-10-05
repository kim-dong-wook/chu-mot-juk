import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchBookState, tagsState } from '../../stores/atom';
import { useParams } from 'react-router-dom';
import SearchList from './SearchList';
import {
  getBooksByTags,
  getBooksByGenre,
  getBooksByName,
  getBooksByPlatform,
} from '../../api/API';
import TagLists from './TagLists';
import Loading from '../Loading';

const TagSearch = () => {
  const [books, setBooks] = useRecoilState(searchBookState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [hidden, setHidden] = useState(true);
  const [genreSeleted, setGenreSeleted] = useState('로맨스');
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  const onClickToggle = () => {
    setHidden(!hidden);
  };

  const onClickGenre = (genre) => {
    const fetchData = async () => {
      setLoading(true);
      if (genre === '로맨스') {
        const result = await getBooksByGenre(0);
        setBooks(result.data);
      } else if (genre === '판타지') {
        const result = await getBooksByGenre(1);
        setBooks(result.data);
      } else if (genre === 'BL') {
        const result = await getBooksByGenre(2);
        setBooks(result.data);
      }
      setLoading(false);
    };
    fetchData();
    console.log(genre);
    setGenreSeleted(genre);
    setTags([]);
  };

  const onChange = (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const fetchData = async () => {
        const result = await getBooksByName(keyword);
        if (result !== null) {
          setBooks(result.data);
        } else {
          setBooks([]);
        }
      };
      fetchData();
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (name) {
      const fetchData = async () => {
        setLoading(true);
        const result = await getBooksByPlatform(name);
        setBooks(result.data);
        setLoading(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        setLoading(true);
        const result = await getBooksByGenre(0);
        setBooks(result.data);
        setLoading(false);
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (tags.length > 0) {
      const fetchData = async () => {
        const result = await getBooksByTags(tags);
        if (result !== null) {
          setBooks(result.data);
        } else {
          setBooks([]);
        }
      };
      fetchData();
    }
  }, [tags]);

  if (!books && loading) {
    return (
      <div className="w-[80rem] h-[2200px] mx-auto mt-10">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-[80rem] h-[2200px] mx-auto mt-10">
      {loading ? <Loading /> : null}
      <div className="pointer-events-none flex items-center"></div>
      <input
        name="keyword"
        className="block w-full rounded-none bg-white py-3 pl-8 pr-3 text-xl placeholder-gray-500 focus:outline-none lg:py-6 lg:pl-10"
        placeholder="작품을 입력하세요"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
      <div className="w-full h-[3rem] flex justify-between items-end mt-10">
        <div className="flex items-end">
          <div className="text-3xl mr-6">키워드로 검색하기</div>
          <div className="flex space-x-4 text-xl text-primary-3 items-end">
            <div
              className={`cursor-pointer ${
                genreSeleted === '로맨스' ? 'scale-110 text-primary-4' : ''
              }`}
              onClick={() => onClickGenre('로맨스')}
            >
              로맨스/로판
            </div>
            <div
              className={`cursor-pointer ${
                genreSeleted === '판타지' ? 'scale-110 text-primary-4' : ''
              }`}
              onClick={() => onClickGenre('판타지')}
            >
              판타지
            </div>
            <div
              className={`cursor-pointer ${
                genreSeleted === 'BL' ? 'scale-110 text-primary-4' : ''
              }`}
              onClick={() => onClickGenre('BL')}
            >
              BL
            </div>
          </div>
        </div>
        <div className="text-xl cursor-pointer" onClick={onClickToggle}>
          {hidden ? '전체 보기' : '숨기기'}
        </div>
      </div>
      <div className="border-t-2  border-primary-4 mt-4"></div>
      <div
        className={`${
          hidden ? 'hidden' : ''
        } my-8 space-y-8 h-[24rem] overflow-y-scroll pr-4`}
      >
        <TagLists genre={genreSeleted}></TagLists>
      </div>
      <div className="border-t-2  border-primary-4 pt-4"></div>
      <SearchList books={books}></SearchList>
    </div>
  );
};

export default TagSearch;
