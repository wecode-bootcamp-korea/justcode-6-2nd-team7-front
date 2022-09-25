import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../../atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import MyModal from './components/MyModal';
import SearchModal from './components/SearchModal';

import * as S from './Nav.styled.js';

const Nav = () => {
  const navigate = useNavigate();
  const [input, setInput] = useRecoilState(searchInputState);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [myHover, setMyHover] = useState(true);
  const [listStyle, setListStyle] = useState('block');

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const seacrhClick = (e) => {
    listStyle === 'block' ? setListStyle('none') : setListStyle('block');
    listStyle === 'none' && input !== '' && navigate('/search');
  };

  const logoClick = () => {
    setListStyle('block');
    setInput('');
  };

  return (
    <S.NavStyle>
      <div className={scrollPosition < 2 ? 'nav-origin' : 'nav-change'}>
        <div className='nav-container'>
          <Link to='/' className='logo-box' onClick={logoClick}>
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
                color={scrollPosition < 2 ? '#ffffffc4' : '#525252'}
                size='lg'
                className='search-icon'
                onClick={seacrhClick}
              />
              <SearchModal scrollPosition={scrollPosition} setListStyle={setListStyle} listStyle={listStyle} />
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
                          console.log(myHover);
                        }}
                        onMouseOut={() => {
                          setMyHover(false);
                        }}
                        className='nav-link'>
                        마이페이지
                      </Link>
                      <MyModal myHover={myHover} />
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
