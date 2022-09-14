import { atom } from 'recoil';

const roundState = atom({
  key: 'roundState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export { roundState };
