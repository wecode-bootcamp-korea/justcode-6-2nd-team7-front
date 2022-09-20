import React from 'react';
import * as S from './Nav.styled.js';

const Nav = () => {
  return (
    <S.NavStyle>
      <div className='nav-container'>
        <img className='logo' src='/images/logoWhite.svg' alt='logo' />
        <div className='nav-content'>
          <img />
          <li>
            <ul>내주변</ul>
            <ul>예약내역</ul>
            <ul>더보기</ul>
            <ul>로그인</ul>
          </li>
        </div>
      </div>
    </S.NavStyle>
  );
};

export default Nav;
