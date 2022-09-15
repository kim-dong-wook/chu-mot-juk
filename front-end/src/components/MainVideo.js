import React, { useState, useEffect, useRef, useCallback } from 'react';
import VideoPath from '../assets/videos/mainVideo1.mp4';
import VideoImg from '../assets/images/logo2.png';
import './MainVideo.css';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
const MainVideo = ({ id }) => {
  const [videos, setVideos] = useRecoilState(videosState);

  const path = VideoPath;
  const videoElement = useRef(null);

  const togglePlay = () => {
    let copy = JSON.parse(JSON.stringify(videos));
    copy[id].isPlaying = !copy[id].isPlaying;
    setVideos(copy);
  };

  useEffect(() => {
    videos[id].isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [videos, videoElement, id]);

  useEffect(() => {}, []);

  const toggleMute = () => {
    let copy = JSON.parse(JSON.stringify(videos));
    copy[id].isMuted = !copy[id].isMuted;
    setVideos(copy);
  };

  useEffect(() => {
    videos[id].isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  });

  return (
    // /* muted 설정을 해야 크롬에서 자동 재생이 된다 */
    <section class="netflix-home-video">
      <video
        // ref={El}
        ref={videoElement}
        autoplay
        muted
        loop
      >
        <source src={path} type="video/mp4" />
      </video>
      {/* 수정중 */}
      <div class="content">
        <section class="left">
          <img className="" src={VideoImg} alt="" />
          <div class="iia">
            {/* 부트스트랩아이콘 */}

            <button onClick={togglePlay}>
              {videos[id].isPlaying ? (
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
              {videos[id].isMuted ? (
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
              <i class="bi bi-info-circle"></i>
              상세 정보
            </a>
          </div>
        </section>
        <section class="right">
          <a
            href={{}}
            style={{ color: '#f3f3f3', padding: '10px' }}
            className="color-white"
          >
            <i class="bi bi-info-circle"></i>
            웹소설
          </a>
          <a href={{}} style={{ color: '#f3f3f3' }} className="color-white">
            <i class="bi bi-info-circle"></i>
            웹툰
          </a>
        </section>
      </div>
    </section>
  );
};

export default MainVideo;
