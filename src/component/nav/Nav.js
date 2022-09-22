import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './Nav.styled.js';

import MyModal from './components/MyModal';
import SearchModal from './components/SearchModal';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [myHover, setMyHover] = useState(false);
  const [listStyle, setIistStyle] = useState('block');

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const seacrhClick = (e) => {
    // listStyle == "none" && -> 검색하기 구현해야 함
    listStyle === 'block' ? setIistStyle('none') : setIistStyle('block');
  };

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
            <div className={classnames('search-icon-box', { 'search-icon-change': listStyle === 'none' })}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color={scrollPosition < 2 ? 'rgba(255, 255, 255, 0.767)' : ' rgb(82, 82, 82)'}
                size='lg'
                className='search-icon'
                onClick={seacrhClick}
              />
              {listStyle === 'none' && <SearchModal scrollPosition={scrollPosition} setIistStyle={setIistStyle} />}
            </div>

            <div style={{ display: listStyle }}>
              <ul className='navigate-list'>
                <li className='list'></li>
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
                        {myHover === true && <MyModal />}
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
      </div>
    </S.NavStyle>
  );
};

export default Nav;
