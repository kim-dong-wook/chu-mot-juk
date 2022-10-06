import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import styled, { css } from 'styled-components';
import logo from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import wIcon from '../../assets/images/whiteIcon.png';
import close from '../../assets/images/CloseButton.png';
import kakaoLogin from '../../assets/images/KaKaoLogin.png';
import { KAKAO_AUTH_URL } from './KaKaoAuth';
import { useRecoilState } from 'recoil';
import {
  isLoginState,
  ageRangeState,
  genderState,
  userIdState,
  nicknameState,
  profileImgState,
} from '../../stores/atom';
// import { loginState } from '../../stores/atom';
import {
  useSoundB1,
  useSoundB2,
  useSoundB3,
  useSoundB4,
  useSoundMarioDeath,
} from '../../hooks/useSound';
// link a button ref={ref1}

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoginState);
  const [profileImg, setProfileImg] = useRecoilState(profileImgState);
  // 모달 나중에 ㅠ
  // const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ref1 = useSoundB1();

  return (
    <div>
      <header
        className={`bg-[#554540] hover:duration-300 duration-300 sticky top-0 z-50 flex px-[5%] h-16 items-center
      ${scrollPosition > 30 ? 'bg-primary-4 duration-500' : ''}`}
      >
        <Link ref={ref1} className="w-10 mr-20" to="/">
          <img alt="" src={logo} style={{ maxWidth: '300%' }}></img>
        </Link>
        <div className="w-full flex justify-between">
          <div className="ml-[4vw] space-x-8 text-primary-1 text-xl">
            <Link to="/testintro">유형검사</Link>
            <Link to="/vsintro">이상형월드컵</Link>
            <Link to="/tagsearch">태그검색</Link>
            {/* <Link to="/detail">detail</Link>
            <Link to="/temp">temp</Link> */}
          </div>

          <div className=" space-x-8 text-primary-1 text-xl">
            {isLoggedIn === false && (
              <>
                <Link to="/mypage">로그인</Link>
                {/* <Link to="/mybox">보관함</Link>
                <Link to="/logout">로그아웃</Link> */}
                {/* <button
                  style={{ borderStyle: 'solid' }}
                  className="bg-[#fff] border-black border 
                  w-[90px] h-[] cursor-pointer rounded-full "
                  onClick={() => {
                    setModalOpen(true);
                  }}
                >
                  <Text>로그인</Text>
                </button> */}
                {/* {modalOpen && (
                  <Container>
                    <Background />
                    <ModalBlock>
                      <Wrapper>
                        <Contents>
                          <Logo src={logo2} />
                          <Text1>
                            지금 로그인하고 추못죽에 서비스를 사용해보세요.
                            최선을 다해 추천해드려요!! :)
                          </Text1>
                          <a href={KAKAO_AUTH_URL}>
                            <LoginButton2>
                              <img alt="" src={kakaoLogin} />
                            </LoginButton2>
                          </a>
                          <Guide>
                            서비스 이용을 위해 이메일과 이름을 수집합니다.
                          </Guide>
                          <CloseButton
                            onClick={() => {
                              setModalOpen(false);
                            }}
                          >
                            <img src={close} alt="" />
                          </CloseButton>
                        </Contents>
                      </Wrapper>
                    </ModalBlock>
                  </Container>
                )} */}
              </>
            )}
          </div>
        </div>
        <div className="   text-primary-2 text-xl">
          {isLoggedIn === true && (
            <>
              <Image
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                src={profileImg}
              />
              {menuOpen ? (
                <DropdownMenu onMouseLeave={() => setMenuOpen(false)}>
                  <Link to="/mypage">
                    <Menu>마이페이지</Menu>
                  </Link>
                  <Link to="/mybox">
                    <Menu>보관함</Menu>
                  </Link>
                  <Link to="/logout">
                    <Menu>로그아웃</Menu>
                  </Link>
                </DropdownMenu>
              ) : null}
            </>
          )}
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Header;

const DropdownMenu = styled.ul`
  border-radius: 16px;
  margin-top: 11.5px;
  margin-left: -91px;
  height: 170px;
  background-color: white;
  position: absolute;
  /* transform: translateX(-22px); */
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const Menu = styled.li`
  padding-top: 18px;
  padding-left: 0px;
  width: 220px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  :hover {
    background-color: white;
    font-weight: 700;
  }
  background-color: white;
`;

const Image = styled.img`
  /* margin-right: 3.2rem; */
  width: 44px;
  height: 40px;
  display: block;
  border-radius: 9999px;
  cursor: pointer;
  ${(props) =>
    props.menuOpen
      ? css`
          opacity: 0.5;
        `
      : `
      opacity: 1;
      `}
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  width: 1000px;
  height: 600px;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  top: 60px;
  left: 210px;
  /* padding-bottom: 23px; */
  /* width: 400px; */
  /* height: 66px; */
`;

export const ModalBlock = styled.div`
  position: absolute;
  top: 5.5rem;
  height: 600px;
  border-radius: 4px;
  background-color: white;
  width: 1000px;
  @media (max-width: 1120px) {
    width: 37.5rem;
  }
  @media (max-width: 50rem) {
    width: 80%;
  }
  min-height: 35rem;
  animation: modal-show 1s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40.01px;
  right: 40px;
  border: 0;
  outline: 0;
  width: 16px;
  height: 16px;
  background-color: white;
  cursor: pointer;
`;

export const Guide = styled.div`
  position: absolute;
  /* width: 301px; */
  height: 24px;
  /* left: 349px; */
  top: 466px;
  font-weight: 500;
  line-height: 24px;
  color: #686868;
`;

export const Text1 = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 500;
  /* left: 284px; */
  top: 333px;
  /* width: 433px; */
  /* height: 72px; */
  line-height: 36px;
`;
export const LoginButton2 = styled.button`
  position: absolute;
  background-color: none;
  left: 260px;
  top: 382px;
  cursor: pointer;
  padding: 0;
  padding-bottom: 0;
  border: none;
  height: 68px;
`;
