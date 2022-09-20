import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './Nav.styled.js';

import MyModal from './MyModal.js';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [myHover, setMyHover] = useState(false);

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
            <ul className='navigate-list'>
              {/* <FontAwesomeIcon icon='fa-solid fa-magnifying-glass' /> */}
              <li className='list'>
                <Link to='' className='nav-link'>
                  내주변
                </Link>
              </li>
              <li className='list'>
                <Link to='/my' className='nav-link'>
                  예약내역
                </Link>
              </li>
              <li className='list'>
                <Link to='' className='nav-link'>
                  더보기
                </Link>
              </li>
              <li className='list'>
                {localStorage.getItem('token') !== null ? (
                  <>
                    <Link
                      to='/my'
                      onMouseOver={() => {
                        setMyHover(true);
                      }}
                      onMouseOut={() => {
                        setMyHover(false);
                      }}
                      className='nav-link'>
                      마이페이지
                      {myHover == true && <MyModal />}
                    </Link>
                  </>
                ) : (
                  <Link to='/login' className='nav-link'>
                    로그인
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </S.NavStyle>
  );
};

export default Nav;
