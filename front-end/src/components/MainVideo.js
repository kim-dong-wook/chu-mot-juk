import React, { useState, useEffect, useRef, useCallback } from 'react';
import VideoPath from '../assets/videos/mainVideo1.mp4';
import VideoImg from '../assets/images/logo2.png';
import './MainVideo.css';

const MainVideo = () => {
  const path = VideoPath;

  const videoElement = useRef(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };
  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  // const myvideo = useRef(null);
  // const handleVideo = () => {
  //   if (myvideo.paused) {
  //     myvideo.current.play();
  //   } else {
  //     myvideo.current.pause();
  //   }
  // };
  // const handleAudio = () => {
  //   if (myvideo.muted) {
  //     myvideo.muted = false;
  //   } else {
  //     myvideo.muted = true;
  //   }
  // };

  // const El = useRef(null);
  // const onMouseOver = useCallback((e) => {
  //   console.log(e.target.play());
  // });
  // const onMouseOut = useCallback((e) => {
  //   console.log(e.target.pause());
  // });

  // const runBtn = useRef(null);
  // const muteBtn = useRef(null);

  return (
    // /* muted 설정을 해야 크롬에서 자동 재생이 된다 */
    <section class="netflix-home-video">
      <video
        // ref={El}
        ref={videoElement}
        autoplay
        muted
        loop
        // onMouseOver={onMouseOver}
        // onMouseOut={onMouseOut}
      >
        <source src={path} type="video/mp4" />
      </video>
      {/* 수정중 */}
      <div class="content">
        <section class="left">
<<<<<<< front-end/src/components/MainVideo.js
          <img className="" src={VideoImg} alt="" />
          <div class="iia">
=======
          {<img class="ms-2" src={VideoImg} alt="" />}
          <div class="d-flex mt-2">
>>>>>>> front-end/src/components/MainVideo.js
            {/* 부트스트랩아이콘 */}

            <button onClick={togglePlay}>
              {playerState.isPlaying ? (
                <i
                  class="bi bi-pause-fill "
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                ></i>
              ) : (
                <i
                  class="bi bi-play-fill "
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                ></i>
              )}
            </button>

            <button onClick={toggleMute}>
              {playerState.isMuted ? (
                <i
                  class="bi bi-volume-mute "
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                ></i>
              ) : (
                <i
                  class="bi bi-volume-up"
                  style={{ cursor: 'pointer', fontSize: '2rem' }}
                ></i>
              )}
            </button>

            {/* "text-white ms-3 mt-3 text-decoration-none" */}
            <a href={{}} className="color-white">
              <i class="bi bi-info-circle" style={{ padding: '0%' }}></i>
              상세 정보
            </a>
          </div>
        </section>
        <section class="right"></section>
      </div>
    </section>
  );
};

export default MainVideo;
