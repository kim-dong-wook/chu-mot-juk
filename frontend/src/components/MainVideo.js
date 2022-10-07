import React, { useState, useEffect, useRef, useCallback } from 'react';
import Video1 from '../assets/videos/mainVideo1.mp4';
import Video2 from '../assets/videos/mainVideo2.mp4';
import Video3 from '../assets/videos/mainVideo3.mp4';
import Video4 from '../assets/videos/mainVideo4.mp4';
import Video5 from '../assets/videos/mainVideo5.mp4';
import Video6 from '../assets/videos/mainVideo6.mp4';
import Video7 from '../assets/videos/mainVideo7.mp4';
import VideoImg from '../assets/images/logo2.png';
import './MainVideo.css';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
const MainVideo = ({ id }) => {
  const [videos, setVideos] = useRecoilState(videosState);
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

  const toggleFullscreen = () => {
    if (videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  };

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
        <source
          src={
            id === 0
              ? Video1
              : id === 1
              ? Video2
              : id === 2
              ? Video3
              : id === 3
              ? Video4
              : id === 4
              ? Video5
              : id === 5
              ? Video6
              : id === 6
              ? Video7
              : ''
          }
          type="video/mp4"
        />
      </video>
      {/* 수정중 */}
      <div className="pl-10 pr-8 content mt-[465px] items-end">
        <section>
          <div className="text-white space-x-4">
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
            <button onClick={toggleFullscreen}>
              <i
                class="bi bi-fullscreen"
                style={{ cursor: 'pointer', fontSize: '1.8rem' }}
              ></i>
            </button>
          </div>
        </section>
        <section className="text-white text-lg space-x-4">
          <a href={{}}>
            <i class="bi bi-info-circle"></i>
            웹소설
          </a>
          <a href={{}}>
            <i class="bi bi-info-circle"></i>
            웹툰
          </a>
        </section>
      </div>
    </section>
  );
};

export default MainVideo;
