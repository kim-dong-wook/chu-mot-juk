import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <footer class="bg-[#f3f3f3] text-sm leading-loose">
      <div class=" text-[18px] mx-auto max-w-[88rem] text-[#686868] py-12 lg:px-8">
        <p class="mb-8 text-gray-900">
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/#"
          >
            이용약관
          </a>
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/#"
          >
            개인정보처리방침
          </a>
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/#"
          >
            고객센터
          </a>
        </p>
        <div className="flex justify-between items-center mb-[0.8em]">
          <div>
            <p>(주)추천못하면죽는병걸림</p>
            <p>대표이사 : 김동욱 김다은 박예은 이성민 전민재 최태순</p>
            {/* <p>주소 : 서울특별시 강남구 테헤란로 212 멀티캠퍼스</p> */}
          </div>
          <div className="w-[7.5em] text-[#686868] flex justify-around">
            <a href="mailto:ssafy@ssafy.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-[1.5em]  hover:curor-pointer"
              />
            </a>
            <a href="/#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-[1.5em] h-[1.5em]  hover:curor-pointer"
              />
            </a>
            <a href="/#">
              <FontAwesomeIcon
                icon={faYoutube}
                className="h-[1.5em]  hover:curor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[0.8em]">
          <div>
            <p class="  ">
              싸피 번호 <a href="tel:02-3429-5100">02-3429-5100</a> · 이메일
              문의 <a href="mailto:ssafy@ssafy.com ">ssafy@ssafy.com</a>
            </p>
          </div>
          <div className="   flex justify-end">
            추못죽 © 2022 by A207, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
