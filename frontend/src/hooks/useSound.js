import { useEffect, useRef } from 'react';
import SoundB1 from '../assets/sounds/book1.mp3';
import SoundB2 from '../assets/sounds/book2.mp3';
import SoundB3 from '../assets/sounds/book3.mp3';
import SoundB4 from '../assets/sounds/book4.mp3';
import SoundMarioDeath from '../assets/sounds/marioDeath.mp3';

export const useSoundB1 = () => {
  const ref = useRef();
  useEffect(() => {
    const audio = new Audio(SoundB1);
    ref.current.addEventListener('click', () => {
      audio.load();
      audio.play();
    });
  }, []);
  return ref;
};

export const useSoundB2 = () => {
  const ref = useRef();
  useEffect(() => {
    const audio = new Audio(SoundB2);
    ref.current.addEventListener('click', () => {
      audio.load();
      audio.play();
    });
  }, []);
  return ref;
};

export const useSoundB3 = () => {
  const ref = useRef();
  useEffect(() => {
    const audio = new Audio(SoundB3);
    ref.current.addEventListener('click', () => {
      audio.load();
      audio.play();
    });
  }, []);
  return ref;
};

export const useSoundB4 = () => {
  const ref = useRef();
  useEffect(() => {
    const audio = new Audio(SoundB4);
    ref.current.addEventListener('click', () => {
      audio.load();
      audio.play();
    });
  }, []);
  return ref;
};

export const useSoundMarioDeath = () => {
  const ref = useRef();
  useEffect(() => {
    const audio = new Audio(SoundMarioDeath);
    ref.current.addEventListener('click', () => {
      audio.load();
      audio.play();
    });
  }, []);
  return ref;
};
