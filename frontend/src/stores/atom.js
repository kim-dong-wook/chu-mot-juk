import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import axios from 'axios';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const LikeTagNoState = atom({
  key: 'LikeTagNoState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const TagNosState = atom({
  key: 'TagNosState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

const isLoginState = atom({
  key: 'isloginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
const ageRangeState = atom({
  key: 'ageRangeState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
const genderState = atom({
  key: 'genderState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
const userIdState = atom({
  key: 'userIdState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
const nicknameState = atom({
  key: 'nicknameState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
const profileImgState = atom({
  key: 'profileImgState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

const roundState = atom({
  key: 'roundState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const testPageState = atom({
  key: 'testPageState', // unique ID (with respect to other atoms/selectors)
  default: -1, // default value (aka initial value)
});

const genreState = atom({
  key: 'genreState', // unique ID (with respect to other atoms/
  default: 'none',
});

const failState = atom({
  key: 'failState', // unique ID (with respect to other atoms/
  default: 'none',
});

const videosState = atom({
  key: 'videosState', // unique ID (with respect to other atoms
  default: [
    {
      id: 0,
      isPlaying: true,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
    {
      id: 1,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
    {
      id: 2,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
    {
      id: 3,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },

    {
      id: 4,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
    {
      id: 5,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
    {
      id: 6,
      isPlaying: false,
      progress: 0,
      speed: 1,
      isMuted: true,
    },
  ], // default value
});

export const axiosBasic = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

const searchBookState = atom({
  key: 'searchBookState',
  default: null,
});

const tagsState = atom({
  key: 'tagsState',
  default: [],
});

const testState = atom({
  key: 'testState',
  default: new Set(),
});

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist',
//   storage: localStorage,
// });

// export const loginState = atom({
//   key: 'loginState',
//   default: false,
//   effects_UNSTABLE: [persistAtom],
// });

// export const profileNickNameState = atom({
//   key: 'profileNickNameState',
//   default: '',
//   effects_UNSTABLE: [persistAtom],
// });

// export const profileImageState = atom({
//   key: 'profileImageState',
//   default: '',
//   effects_UNSTABLE: [persistAtom],
// });
// export const accountEmailState = atom({
//   key: 'accountEmailState',
//   default: '',
//   effects_UNSTABLE: [persistAtom],
// });

// export const genderState = atom({
//   key: 'genderState',
//   default: true,
//   effects_UNSTABLE: [persistAtom],
// });

// export const ageRangeState = atom({
//   key: 'ageRangeState',
//   default: 20,
//   effects_UNSTABLE: [persistAtom],
// });

// export const fetchUserInfo = async ({ setuserData, access }) => {
//   try {
//     setuserData(null);
//     const response = await axiosBasic.get(`api/user`, {
//       headers: {
//         Authorization: `Bearer ${access}`,
//       },
//     });
//     setuserData(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//필요한 API만들기
/*export const PersonalInfo = async (token) =>
    await API.get('/mypage', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  export const newReview = async (data) =>
    await axios.post('/item/review', data);
  
  //다른 파일에서 사용예시
  /*const myPage = async () => {
    try {
      const PersonalInfoRes = await PersonalInfo(token);*/

export {
  roundState,
  testPageState,
  videosState,
  genreState,
  failState,
  searchBookState,
  tagsState,
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
  testState,
};
