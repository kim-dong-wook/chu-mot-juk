import axios from 'axios';

const URL = 'https://j7a207.p.ssafy.io/api';

export const axiosBasic = axios.create({
  baseURL: URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  timeout: 10000,
});

export const getBook = async (number) => {
  try {
    const response = await axiosBasic.get('novel/' + number);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByGenre = async (number) => {
  try {
    const response = await axiosBasic.get('novel/list/' + number);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByTags = async (tags) => {
  try {
    let jsonData = {
      tags,
    };

    const response = await axiosBasic.post('novel/search/tags', jsonData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getGenreTag = async (genre, tagType) => {
  try {
    let response = null;
    if (genre === '로맨스') {
      response = await axiosBasic.get('novel/search/romancetag/' + tagType);
    } else if (genre === '판타지') {
      response = await axiosBasic.get('novel/search/fantasytag/' + tagType);
    } else if (genre === 'BL') {
      response = await axiosBasic.get('novel/search/bltag/' + tagType);
    } else {
      response = null;
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByName = async (name) => {
  try {
    const response = await axiosBasic.get('novel/search/title/' + name);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBooksByPlatform = async (name) => {
  try {
    const response = await axiosBasic.get('novel/platform/' + name);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWCInfo = async () => {
  try {
    const response = await axiosBasic.post('wc/');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBookResult = async (tags) => {
  try {
    let jsonData = {
      tags,
    };
    const response = await axiosBasic.post('novel/recommendation', jsonData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postUserTag = async (tagNo, userNo) => {
  try {
    let jsonData = {
      tagNo,
      userNo,
    };
    const response = await axiosBasic.post('novel/tags', jsonData);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
