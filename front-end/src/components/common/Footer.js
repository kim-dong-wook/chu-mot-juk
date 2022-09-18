import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer class="bg-white text-sm leading-loose">
      <div class="mx-auto max-w-6xl p-6 text-gray-400 lg:py-12 lg:px-8">
        <p class="mb-8 text-gray-500">
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/terms"
          >
            이용약관
          </a>
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/privacy"
          >
            개인정보처리방침
          </a>
          <a
            target="_blank"
            class="mr-4 underline"
            rel="noopener noreferrer"
            href="/help"
          >
            고객센터
          </a>
        </p>
        <p>
          (주)디엘피스튜디오 · 사업자 등록번호 587-87-02092 · 통신판매업
          신고번호 제2021-서울서초-3752호
        </p>
        <p>
          대표이사 서현철 · 개인정보 보호책임자 서현철 · 서울특별시 서초구
          반포대로28길 94 401호
        </p>
        <p class="mt-8">
          대표번호 <a href="tel:02-6959-8799">02-6959-8799</a> · 고객문의{' '}
          <a href="mailto:help@txtsoda.com">help@txtsoda.com</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
