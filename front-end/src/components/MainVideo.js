import React, { useRef, useCallback } from 'react';
import VideoPath from '../assets/videos/mainVideo1.mp4';
import VideoImg from '../assets/img/imgimg.png';
import './MainVideo.css';

const MainVideo = () => {
  const path = VideoPath;
  const El = useRef(null);
  const onMouseOver = useCallback((e) => {
    console.log(e.target.play());
  });
  const onMouseOut = useCallback((e) => {
    console.log(e.target.pause());
  });

  const runBtn = useRef(null);
  const muteBtn = useRef(null);
  // function myPlay() {
  //   if (video.paused) {
  //     video.play();
  //     btn.setAttribute('class', 'bi bi-pause-fill mt-1');
  //   } else {
  //     video.pause();
  //     btn.setAttribute('class', 'bi bi-play-fill mt-1');
  //   }
  // }

  // function myMute() {
  //   if (video.muted) {
  //     video.muted = false;
  //     mute.setAttribute("class", "bi bi-volume-up mt-1");
  //   } else {
  //     video.muted = true;
  //     mute.setAttribute("class", "bi bi-volume-mute mt-1");
  //   }
  // }

  return (
    // /* muted 설정을 해야 크롬에서 자동 재생이 된다 */
    <section class="netflix-home-video">
      <video
        ref={El}
        muted
        loop
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <source src={path} type="video/mp4" />
      </video>
      {/* 수정중 */}
      <div class="content">
        <section class="left">
          {<img class="ms-2" src={VideoImg} alt="" />}
          <div class="d-flex mt-2">
            {/* 부트스트랩아이콘 */}
            <i
              class="bi bi-pause-fill mt-1"
              style={{ cursor: 'pointer', fontSize: '2rem' }}
              ref={runBtn}
              onclick="myPlay()"
            ></i>

            <i
              class="bi bi-volume-mute mt-1"
              style={{ cursor: 'pointer', fontSize: '2rem' }}
              ref={muteBtn}
              onclick="myMute()"
            ></i>
            {/* "text-white ms-3 mt-3 text-decoration-none" */}
            <a href={{}} class="mt-3">
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
