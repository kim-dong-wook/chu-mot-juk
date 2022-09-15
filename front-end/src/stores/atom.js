import { atom } from 'recoil';

const roundState = atom({
  key: 'roundState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
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
  ], // default value
});

export { roundState, videosState };
