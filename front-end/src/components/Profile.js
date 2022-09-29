import React, { useState, useEffect, useRef, useCallback } from 'react';
import { videosState } from '../stores/atom';
import { useRecoilState } from 'recoil';
import './Profile.css';

const MyBox = () => {
  const tags = [
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
    '하느님이',
    '보우하사',
    '우리나라',
    '만세',
    '동해',
    '물과',
    '백두산',
    '이마르고',
    '닳도록',
  ];
  // #efc1b8  primary-2

  return (
    <>
      <div className="tx-container">
        <main className="tx-main space-y-8 max-w-[80rem] lg:space-y-16">
          <div className="w-full h-full mt-8">
            <div className="text-[30px] mb-4">
              {' '}
              로그인 여부 관리되면 마이페이지로 이동예정
            </div>
            <div className="text-[30px] mb-4">마이페이지</div>

            {/* <section id="page_modify">
              <h2 class="module_pagetitle">
                <span class="pagetitle_text">정보 변경</span>
              </h2>
              <article class="edit_info js_edit_info">
                <table class="edit_table">
                  <tbody>
                    <tr>
                      <th>이름</th>
                      <td>
                        <span class="user_name">전민재</span>
                        <a
                          href="/account/leave"
                          class="rui_button_white_30 btn_delete"
                        >
                          회원 탈퇴
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>아이디</th>
                      <td>
                        <span class="user_id">minjae77777</span>
                      </td>
                    </tr>
                    <tr class="user_email">
                      <th>이메일</th>
                      <td>
                        <div id="js_user_email_default">
                          <input
                            type="hidden"
                            id="verify_email_token"
                            value="MTY2NDM0NDA4OHwwNDQ0NjY2ODMzODkyNDRmMjZjM2I3MTczNWExNDc2ZDM2MmI5NWNlMmM2ZGY5NjNjMDg2MmU1OTkxYmFiYWFh"
                          ></input>
                          <p class="email_address js_email_address">
                            minjae77777@naver.com
                          </p>
                          <p class="alert success">인증된 이메일 주소입니다.</p>

                          <div class="modify_button_wrapper">
                            <button
                              class="rui_button_gray_30 email_button js_email_modify_button"
                              type="button"
                            >
                              이메일 변경
                            </button>
                          </div>
                        </div>

                        <div
                          id="js_user_email_send"
                          style={{ display: ' none' }}
                        >
                          <div
                            class="js_send_email_success_wrapper"
                            style={{ display: ' none' }}
                          >
                            <p class="email_address js_email_address"></p>
                            <p class="alert">인증 메일이 발송되었습니다.</p>
                            <p class="modify_description">
                              <strong class="left_time">
                                유효시간 :{' '}
                                <span class="time">
                                  이메일 발송 후{' '}
                                  <span class="js_email_valid_hours"></span>시간
                                  이내
                                </span>
                              </strong>
                              <br></br>
                              이메일 주소를 인증하시면 변경이 완료됩니다.
                            </p>
                            <div class="modify_button_wrapper">
                              <a
                                class="rui_button_blue_30 email_button js_email_provider_link"
                                target="_blank"
                                style={{ display: ' none' }}
                              >
                                이메일 확인하러 가기
                              </a>
                              <button
                                class="rui_button_white_30 email_button js_email_resend_button"
                                type="button"
                              >
                                인증 메일 재발송
                              </button>
                            </div>
                          </div>
                          <div
                            class="js_send_email_failure_wrapper"
                            style={{ display: ' none' }}
                          >
                            <p class="email_address js_email_address"></p>
                            <p class="alert fail">
                              인증 메일 발송에 실패했습니다.
                            </p>
                            <div class="modify_button_wrapper">
                              <button
                                class="rui_button_gray_30 email_button js_email_resend_button"
                                type="button"
                              >
                                인증 메일 재발송
                              </button>
                            </div>
                          </div>
                          <input
                            type="hidden"
                            id="js_verify_email_address"
                            value="minjae77777@naver.com"
                          ></input>{' '}
                        </div>

                        <div
                          id="js_user_email_modify"
                          style={{ display: ' none' }}
                        >
                          <input
                            type="text"
                            id="js_user_email_modify_input"
                            class="rui_text_input"
                            name="email"
                            size="30"
                            value="minjae77777@naver.com"
                          ></input>
                          <p
                            class="alert fail js_user_email_modify_alert"
                            style={{ display: ' none' }}
                          ></p>
                          <p class="modify_description">
                            이메일 주소를 인증하시면 변경이 완료됩니다.
                          </p>
                          <div class="modify_button_wrapper">
                            <button
                              class="rui_button_gray_30 email_button js_email_modify_send_button"
                              type="button"
                            >
                              인증 메일 발송
                            </button>
                            <button
                              class="rui_button_white_30 email_button js_email_modify_cancel_button"
                              type="button"
                            >
                              취소
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="user_new_password">
                      <th>비밀번호 변경</th>
                      <td>
                        <form
                          id="password_form"
                          method="post"
                          action="/account/modify"
                        >
                          <div class="password_row">
                            <div class="input_wrapper rui_text_input js_input_wrapper empty">
                              <input
                                type="password"
                                id="modify_current_pw"
                                class="password_input js_current_password"
                                name="password"
                                title="현재 비밀번호 입력"
                              ></input>{' '}
                              <label
                                class="placeholder"
                                for="modify_current_pw"
                              >
                                현재 비밀번호
                              </label>
                            </div>
                            <ul class="warning_text_wrapper js_warning_current_password_wrapper"></ul>
                          </div>
                          <div class="password_row">
                            <div class="input_wrapper rui_text_input js_input_wrapper empty">
                              <input
                                type="password"
                                id="modify_new_pw"
                                class="password_input js_new_password"
                                name="new_password"
                                title="변경할 비밀번호 입력"
                              ></input>
                              <label class="placeholder" for="modify_new_pw">
                                새 비밀번호
                              </label>
                            </div>
                            <ul class="warning_text_wrapper js_warning_text_wrapper"></ul>
                          </div>
                          <div class="password_row">
                            <div class="input_wrapper rui_text_input js_input_wrapper empty">
                              <input
                                type="password"
                                id="modify_new_pw_confirm"
                                class="password_input js_re_password"
                                name="re_password"
                                title="변경할 비밀번호 한 번 더 입력"
                              ></input>{' '}
                              <label
                                class="placeholder"
                                for="modify_new_pw_confirm"
                              >
                                새 비밀번호 확인
                              </label>
                            </div>
                            <p class="warning_text_wrapper js_warning_confirm_password_wrapper"></p>
                          </div>
                          <div class="password_change_guide">
                            <p class="guide_title">비밀번호 변경 시 유의사항</p>
                            <ul class="guide_list_wrapper">
                              <li class="guide_list">
                                8자 이상, 영문/숫자/특수문자 중 2가지 이상
                                입력해주세요.
                              </li>
                              <li class="guide_list">
                                연속된 3자 이상의 같은 문자는 제한합니다.
                              </li>
                              <li class="guide_list">
                                ID와 같은 비밀번호는 사용할 수 없습니다.
                              </li>
                            </ul>
                          </div>
                          <input
                            type="hidden"
                            name="_token"
                            value="MTY2NDM0NDA4OHwwNDQ0NjY2ODMzODkyNDRmMjZjM2I3MTczNWExNDc2ZDM2MmI5NWNlMmM2ZGY5NjNjMDg2MmU1OTkxYmFiYWFh"
                          ></input>
                          <input
                            type="hidden"
                            name="cmd"
                            value="change_password"
                          ></input>{' '}
                          <div class="password_row">
                            <button
                              type="submit"
                              form="password_form"
                              class="rui_button_gray_30 button_delete"
                            >
                              비밀번호 변경
                            </button>
                          </div>
                        </form>
                      </td>
                    </tr>
                    <tr>
                      <th>마케팅 정보 수신 관리</th>
                      <td>
                        <form
                          id="marketing_form"
                          method="post"
                          autocomplete="off"
                        >
                          <ul>
                            <li class="marketing_agreement_info_list">
                              <input
                                id="marketing_agreement_email"
                                type="checkbox"
                                class="rui_checkbox_input"
                                name="marketing_agreement_email"
                                title="이메일 구독 선택"
                              ></input>{' '}
                              <label
                                for="marketing_agreement_email"
                                class="rui_checkbox_label"
                              >
                                이메일 구독
                              </label>
                              <span class="modify_date">
                                (거부일: 2022.08.30.)
                              </span>
                            </li>
                            <li class="marketing_agreement_info_list">
                              <input
                                id="marketing_agreement_app_push"
                                type="checkbox"
                                class="rui_checkbox_input"
                                name="marketing_agreement_app_push"
                                title="앱 푸시 수신 선택"
                              ></input>{' '}
                              <label
                                for="marketing_agreement_app_push"
                                class="rui_checkbox_label"
                              >
                                앱 푸시 수신
                              </label>
                              <span class="modify_date">
                                {' '}
                                (거부일: 2022.08.30.)
                              </span>
                            </li>
                            <li class="marketing_agreement_info_list">
                              <input
                                id="marketing_agreement_night_app_push"
                                type="checkbox"
                                class="rui_checkbox_input"
                                name="marketing_agreement_night_app_push"
                                title="앱 푸시 수신 선택"
                              ></input>{' '}
                              <label
                                for="marketing_agreement_night_app_push"
                                class="rui_checkbox_label"
                              >
                                야간 앱 푸시 수신
                              </label>
                              <span class="modify_date">
                                (야간: 오후 9시~오전 8시, 거부일: 2022.08.30.)
                              </span>
                            </li>
                          </ul>
                          <p class="caution">
                            마케팅 정보 수신에 동의하시면 추천책, 신간,
                            베스트셀러 등 다양한 책 소식과 이벤트 정보, 할인
                            쿠폰 등의 혜택을 받으실 수 있습니다.
                          </p>
                          <input type="hidden" name="cmd" value="save"></input>
                          <input
                            type="hidden"
                            name="_token"
                            value="MTY2NDM0NDA4OHwwNDQ0NjY2ODMzODkyNDRmMjZjM2I3MTczNWExNDc2ZDM2MmI5NWNlMmM2ZGY5NjNjMDg2MmU1OTkxYmFiYWFh"
                          ></input>
                          <button
                            type="submit"
                            form="marketing_form"
                            class="rui_button_gray_30 button_delete"
                          >
                            수신 변경
                          </button>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </section> */}

            <section class="text-gray-600 border-y border-y-primary-2 bg-[#f3f3f3] overflow-hidden">
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">이름</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">박문대</div>
                  <button class="mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                    이름변경
                  </button>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">아이디</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">asdasdaasd</div>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class="my-auto shrink-0 text-[30px]">선호 태그</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div className="inline">
                    {tags.slice(0, 22).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5  whitespace-nowrap rounded-full bg-primary-2 text-[22px] px-3 py-2  m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button class="my-auto shrink-0 max-h-[45px] mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                    유형검사
                  </button>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class="my-auto shrink-0 text-[30px]">
                    모든 태그(토글 한행 hidden) 각각테그들 토글로 위아래
                  </span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div className="inline">
                    {tags.slice(0, 22).map((tag, index) => (
                      <span
                        id={index}
                        target="_self"
                        className="inline-block items-center mr-0.5  whitespace-nowrap rounded-full bg-primary-2 text-[22px] px-3 py-2  m-2 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div class=" border-y border-y-primary-2 py-[16px]  flex  flex-nowrap">
                <div class="text-center w-64  mb-0   flex-shrink-0 flex flex-col">
                  <span class=" text-[30px]">로그아웃</span>
                </div>
                <div class="justify-between pl-2 border-l-4  border-l-primary-2 flex flex-grow  ">
                  <div class="text-[30px] ml-4">다음에 또 봐요~~</div>
                  <button class="mr-4 right text-[24px] text-white bg-primary-2 py-1 px-8    hover:bg-primary-3     ">
                    로그아웃
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div style={{}} className=""></div>
        </main>
      </div>
    </>
  );
};

export default MyBox;
