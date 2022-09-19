import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c02f0edc5789e39aa1c491cf515d8e22';

const endpoints = {
  originals: '/discover/tv',
  trending: '/trending/all/week',
  now_playing: '/movie/now_playing',
  popular: '/movie/popular',
  top_rated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
};

export const axiosBasic = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const getOriginals = async () => {
  try {
    const response = await axiosBasic.get(endpoints.originals, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrending = async () => {
  try {
    const response = await axiosBasic.get(endpoints.trending, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getNowPlaying = async () => {
  try {
    const response = await axiosBasic.get(endpoints.now_playing, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopular = async () => {
  try {
    const response = await axiosBasic.get(endpoints.popular, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRated = async () => {
  try {
    const response = await axiosBasic.get(endpoints.top_rated, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getUpcoming = async () => {
  try {
    const response = await axiosBasic.get(endpoints.upcoming, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
