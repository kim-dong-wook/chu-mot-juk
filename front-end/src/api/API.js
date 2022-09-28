import axios from 'axios';

const URL = 'https://j7a207.p.ssafy.io:8000/api';

export const axiosBasic = axios.create({
  baseURL: URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  timeout: 5000,
});

export const getBook = async (number) => {
  try {
    const response = await axiosBasic.get('v1/novel/' + number);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBooksByTag = async (tags) => {
  try {
    let jsonData = {
      tags,
    };

    const response = await axiosBasic.post('v1/novel/search/tags', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const example = async (tagNo, userNo) => {
  try {
    let jsonData = {
      tagNo,
      userNo,
    };

    const response = await axiosBasic.post('v1/novel/search/tags', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
