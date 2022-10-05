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
    const response = await axiosBasic.get('/novel/' + number);
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

    const response = await axiosBasic.post('/novel/search/tags', jsonData);
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

    const response = await axiosBasic.post('/novel/search/tags', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// object
export const signIn = async (ageGroup, gender, id, nickname, password) => {
  try {
    let jsonData = {
      ageGroup, //  1,2,3,4,5
      gender, //  false
      id, // 'id'
      nickname, // '박문대'
      password, // 'password'
    };

    const response = await axiosBasic.post('/users', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
// object
export const fixSignIn = async (ageGroup, gender, id, nickname, password) => {
  try {
    let jsonData = {
      ageGroup,
      gender,
      id,
      nickname,
      password,
    };

    const response = await axiosBasic.put('/users', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
// object
export const deleteSignIn = async (
  ageGroup,
  gender,
  id,
  nickname,
  password,
) => {
  try {
    let jsonData = {
      ageGroup,
      gender,
      id,
      nickname,
      password,
    };

    const response = await axiosBasic.delete('/users', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// integer
export const userLikeBook = async (userNo) => {
  try {
    const response = await axiosBasic.get('/users/' + userNo + '/novels');
    return response;
  } catch (error) {
    console.log(error);
  }
};
// integer
export const userLikeTag = async (userNo) => {
  try {
    const response = await axiosBasic.get('/users/' + userNo + '/tags');
    return response;
  } catch (error) {
    console.log(error);
  }
};

// string
export const searchUserById = async (id) => {
  try {
    const response = await axiosBasic.get('/users/id/' + id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//
export const searchMe = async () => {
  try {
    let jsonData = {};

    const response = await axiosBasic.get('/users/me', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// integer
export const searchUserByUserNo = async (userNo) => {
  try {
    const response = await axiosBasic.get('/users/no/' + userNo);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//object
export const exceptUserLikeBook = async (novelNo, userNo) => {
  try {
    let jsonData = {
      novelNo,
      userNo,
    };

    const response = await axiosBasic.delete('/users/novels', jsonData);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//object
export const exceptUserLiketag = async (tagNo, userNo) => {
  try {
    let jsonData = {
      tagNo: tagNo,
      userNo: userNo,
    };

    console.log(jsonData);

    const response = await axiosBasic.delete('users/tags', {
      data: {
        tagNo,
        userNo,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
