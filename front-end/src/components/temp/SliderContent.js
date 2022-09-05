import React from 'react';
import '../../styles/styles.css';

const SliderContent = ({ book }) => {
  return (
    <div class="media-element">
      <img src={'https://image.tmdb.org/t/p/w300' + book.poster_path} alt="" />
    </div>
  );
};

export default SliderContent;
