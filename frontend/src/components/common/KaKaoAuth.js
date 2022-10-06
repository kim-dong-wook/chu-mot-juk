// process.env.REACT_APP_API_KEY
const CLIENT_ID = '4797f1a9c3b9e85999d864532537f338';
// const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
const REDIRECT_URI = 'https://j7a207.p.ssafy.io/oauth/kakao/callback';

const CLIENT_SECRET = 'rylvSvZmYefIncsXmjx2LG412O7KFoOW';
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
// const LOGOUT_REDIRECT_URI = 'http://localhost:3000/logout';
const LOGOUT_REDIRECT_URI = 'https://j7a207.p.ssafy.io/logout';
export {
  CLIENT_ID,
  REDIRECT_URI,
  LOGOUT_REDIRECT_URI,
  CLIENT_SECRET,
  KAKAO_AUTH_URL,
};
