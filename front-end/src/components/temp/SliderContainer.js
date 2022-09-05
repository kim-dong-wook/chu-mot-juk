import React, { useState, useEffect } from 'react';
import '../../styles/styles.css';
import SliderContent from './SliderContent';
import { getOriginals } from '../../api/API';
const SliderContainer = () => {
  const [originals, setOriginals] = useState([]);

  useEffect(() => {
    const fn = async () => {
      setOriginals(await getOriginals());
    };
    fn();
  }, []);

  useEffect(() => {
    console.log(originals);
  }, [originals]);

  return (
    <>
      <h2 class="section-title">Trending now</h2>
      <div class="media-container">
        <div class="media-scroller">
          <div class="media-group" id="1">
            <a class="previous" href="#1">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            {originals.slice(0, 5).map((book) => (
              <SliderContent book={book} key={book.id}></SliderContent>
            ))}
            <a class="next" href="#2" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          <div class="media-group" id="2">
            <a class="previous" href="#1">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            {originals.slice(5, 10).map((book) => (
              <SliderContent book={book} key={book.id}></SliderContent>
            ))}
            <a class="next" href="#3" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          <div class="media-group" id="3">
            <a class="previous" href="#2">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            {originals.slice(10, 15).map((book) => (
              <SliderContent book={book} key={book.id}></SliderContent>
            ))}
            <a class="next" href="#4" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          <div class="media-group" id="4">
            <a class="previous" href="#3">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            {originals.slice(15, 20).map((book) => (
              <SliderContent book={book} key={book.id}></SliderContent>
            ))}
            <a class="next" href="#1" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          <div class="navigation-indicators">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <svg>
        <symbol id="next" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </symbol>
        <symbol id="previous" viewBox="0 0 256 512">
          <path
            fill="white"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </symbol>
      </svg>
    </>
  );
};

export default SliderContainer;
