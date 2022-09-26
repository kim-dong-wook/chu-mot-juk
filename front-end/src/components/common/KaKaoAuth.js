const CLIENT_ID = '4797f1a9c3b9e85999d864532537f338';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
const Logout_Redirect_URI = 'http://localhost:3000/logout';
const Client_Secret = 'rylvSvZmYefIncsXmjx2LG412O7KFoOW';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
