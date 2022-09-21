import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import SideFilter from './components/SideFilter';
import TopFilter from './components/TopFilter';
import ThumbnailList from './components/ThumbnailList';
import { region } from './components/region';
import * as S from './List.styled';

const List = (props) => {
  const [city, setCity] = useState(
    region.map((el, i) => {
      return i === 0 ? { ...el, show: true } : { ...el, show: false };
    }),
  );
  const [seletedCity, setSelectedCity] = useState('서울');
  const [seletedRegion, setSelectedRegion] = useState('강남/역삼/삼성/신사/청담');
  const [showMenu, setShowMenu] = useState(false);

  const handleSelected = (e) => {
    const text = e.target.textContent;
    const newCity = city.map((el) => {
      return el.title === text ? { ...el, show: true } : { ...el, show: false };
    });
    setCity(newCity);
  };

  const handleDetailRegion = (e) => {
    const newSelectedCity = city.find((el) => {
      return el.detail.includes(e.target.textContent) ? el.title : null;
    }).title;
    setSelectedCity(newSelectedCity);
    setSelectedRegion(e.target.textContent);
  };

  const handleShowMenu = (e) => {
    setShowMenu(true);
    e.type === 'mouseleave' && setShowMenu(false);
  };

  return (
    <>
      <S.Header onMouseLeave={handleShowMenu}>
        <div className='container'>
          <h2>호텔·리조트</h2>
          <div className='btn-container' onMouseEnter={handleShowMenu}>
            <div className='btn-area'>
              <span>{seletedCity}&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} size='xs' />
              &nbsp;&nbsp;{seletedRegion}&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCaretDown} size='2xs' />
            </div>
            <div className={showMenu ? 'region-container' : 'region-container none'}>
              <ul className='city-list'>
                {city &&
                  city.map((el) => {
                    return (
                      <div key={el.id} className={el.show ? 'selected' : null}>
                        <li className='title' onMouseOver={handleSelected}>
                          {el.title}
                        </li>
                        <FontAwesomeIcon icon={faChevronRight} size='xs' className='arrow' />
                      </div>
                    );
                  })}
              </ul>
              <ul className='region-list'>
                {city &&
                  city.map((el) => {
                    return (
                      el.show &&
                      el.detail.map((detailEl) =>
                        seletedRegion === detailEl ? (
                          <li key={detailEl} className='selected' onClick={handleDetailRegion}>
                            {detailEl}
                          </li>
                        ) : (
                          <li key={detailEl} onClick={handleDetailRegion}>
                            {detailEl}
                          </li>
                        ),
                      )
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </S.Header>
      <S.Body>
        <SideFilter />
        <main>
          <TopFilter />
          <ul className='thumbnail-container mt32'>
            <ThumbnailList />
            <ThumbnailList />
          </ul>
        </main>
      </S.Body>
    </>
  );
};

export default List;
