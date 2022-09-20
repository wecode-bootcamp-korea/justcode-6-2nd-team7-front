import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './Nav.styled.js';

const Nav = () => {
  return (
    <S.NavStyle>
      <div className='nav-container'>
        <img className='logo' src='/images/logoWhite.svg' alt='logo' />
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
    </S.NavStyle>
  );
};

export default Nav;
