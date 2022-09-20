import React from 'react';
import * as S from './Nav.styled.js';

const Nav = () => {
  return (
    <S.NavStyle>
      <div className='nav-container'>
        <img className='logo' src='/images/logoWhite.svg' alt='logo' />
        <span>내주변</span>
        <span>예약내역</span>
        <span>더보기</span>
        <span>로그인</span>
      </div>
    </S.NavStyle>
  );
};

export default Nav;
