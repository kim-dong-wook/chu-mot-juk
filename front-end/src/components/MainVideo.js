import React, { useRef, useCallback } from 'react';
import VideoPath from '../assets/videos/mainVideo1.mp4';

const MainVideo = () => {
  const path = VideoPath;
  const El = useRef(null);
  const onMouseOver = useCallback((e) => {
    console.log(e.target.play());
  });
  const onMouseOut = useCallback((e) => {
    console.log(e.target.pause());
  });
  return (
    // /* muted 설정을 해야 크롬에서 자동 재생이 된다 */
    <video
      ref={El}
      muted
      loop
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <source src={path} type="video/mp4" />
    </video>
  );
};

export default MainVideo;
