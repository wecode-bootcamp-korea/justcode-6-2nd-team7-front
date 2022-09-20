import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import * as S from './Nav.styled.js';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <S.NavStyle>
      <div className={scrollPosition < 2 ? 'nav-origin' : 'nav-change'}>
        <div className='nav-container'>
          <Link to='/' className='logo-box'>
            {scrollPosition < 2 ? (
              <img className='logo' src='/images/logoWhite.svg' alt='logo' />
            ) : (
              <img className='logo' src='/images/logoBlue.svg' alt='logo' />
            )}
          </Link>
          <div className='nav-content'>
            <li className='navigate-list'>
              {/* <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' /> */}
              <ul>
                <Link to=''>내주변</Link>
              </ul>
              <ul>
                <Link to='/my'>예약내역</Link>
              </ul>
              <ul>
                <Link to=''>더보기</Link>
              </ul>
              <ul>
                {localStorage.getItem('token') !== null ? (
                  <Link to='/my'>마이페이지</Link>
                ) : (
                  <Link to='/login'>로그인</Link>
                )}
              </ul>
            </li>
          </div>
        </div>
      </div>
    </S.NavStyle>
  );
};

export default Nav;
