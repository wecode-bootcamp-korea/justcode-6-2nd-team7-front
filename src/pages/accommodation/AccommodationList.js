import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Map from './components/Map';
import SideFilter from './components/SideFilter';
import TopFilter from './components/TopFilter';
import ThumbnailList from './components/ThumbnailList';

import { region } from './data/region';
import { handleCategory } from './data/functions';

import * as S from './AccommodationList.styled';

const AccommodationList = (props) => {
  const [city, setCity] = useState(
    region.map((el, i) => {
      return i === 0 ? { ...el, show: true } : { ...el, show: false };
    }),
  );
  const [seletedCity, setSelectedCity] = useState('서울');
  const [seletedRegion, setSelectedRegion] = useState('강남/역삼/삼성/신사/청담');
  const [showMenu, setShowMenu] = useState(false);
  const [list, setList] = useState();
  const [acmType, setAcmType] = useState();
  const [showModal, setShowModal] = useState(false);
  const [firstDateShow, setFirstDateShow] = useState(false);
  const [secondDateShow, setSecondDateShow] = useState(false);

  const param = useParams().type;

  useEffect(() => {
    axios
      .get('/data/accommodation/accommodation.json')
      .then((res) => {
        setList(res.data.accommodation);
        setAcmType(Object.keys(res.data.accommodation));
      })
      .catch((err) => console.log('ERROR', err));
    // axios
    //   .get(`http://localhost:8000/accommodation/${param}`)
    //   .then((res) => {
    //     setList(res.data.accommodation);
    //     setAcmType(Object.keys(res.data.accommodation));
    //   })
    //   .catch((err) => console.log('ERROR', err));
  }, []);

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
    (firstDateShow || secondDateShow) && setShowMenu(false);
  };

  return (
    <>
      <S.Header onMouseLeave={handleShowMenu}>
        <div className='container'>
          <h2>{handleCategory(param)}</h2>
          <div className='btn-container' onMouseEnter={handleShowMenu}>
            <div className='btn-area'>
              <span>{seletedCity}&nbsp;&nbsp;</span>
              <FontAwesomeIcon icon={faChevronRight} size='xs' />
              &nbsp;&nbsp;{seletedRegion}&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCaretDown} size='2xs' />
            </div>
            <S.Menu showMenu={showMenu}>
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
            </S.Menu>
          </div>
        </div>
      </S.Header>
      <S.Body>
        <SideFilter
          param={param}
          firstShow={firstDateShow}
          setFirstShow={setFirstDateShow}
          secondShow={secondDateShow}
          setSecondShow={setSecondDateShow}
        />
        <main>
          {showModal && <Map setShowModal={setShowModal} list={list} />}
          <TopFilter setShowModal={setShowModal} />
          {acmType &&
            acmType.map((el) => {
              return <ThumbnailList key={el} list={list[el]} type={el} />;
            })}
        </main>
      </S.Body>
    </>
  );
};

export default AccommodationList;
