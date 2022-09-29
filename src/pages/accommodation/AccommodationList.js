import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { personsState, queryState } from '../../atom';

import Map from './components/Map';
import SideFilter from './components/SideFilter';
import TopFilter from './components/TopFilter';
import Thumbnail from './components/Thumbnail';
import NoData from './components/NoData';

import { region } from './data/region';
import { handleCategory, handleSelectUrl, getDistanceFromLatLonInKm } from './data/functions';

import * as S from './AccommodationList.styled';
import LoadingSpinner from './components/LoadingSpinner';

const AccommodationList = () => {
  const [city, setCity] = useState(
    region.map((el, i) => {
      return i === 0 ? { ...el, show: true } : { ...el, show: false };
    }),
  );
  const [seletedCity, setSelectedCity] = useState('서울');
  const [seletedRegion, setSelectedRegion] = useState('강남/역삼/삼성/신사/청담');
  const [showMenu, setShowMenu] = useState(false);

  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState();
  const [queryArr, setQueryArr] = useRecoilState(queryState);

  const [firstDateShow, setFirstDateShow] = useState(false);
  const [secondDateShow, setSecondDateShow] = useState(false);
  const count = useRecoilValue(personsState);

  const param = useParams().type;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/accommodations/${param}`)
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setList([]);
      });
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

  const handleSortList = (lat, lng) => {
    const haveDisList = list.map((el) => ({
      ...el,
      distance: Number(getDistanceFromLatLonInKm(lat, lng, el.lat, el.lng)),
    }));
    haveDisList.sort((a, b) => a.distance - b.distance);
    setList(haveDisList);
    setLoading(false);
  };

  const getNewList = (id) => {
    setLoading(true);

    if (Number(id) === 2) {
      if (list.length === 0) return setLoading(false);
      const getLatLng = (res) => {
        const myLat = res.coords.latitude;
        const myLng = res.coords.longitude;
        handleSortList(myLat, myLng);
      };
      navigator.geolocation.getCurrentPosition(getLatLng, (err) => {
        setKeyword('no location');
        setList([]);
        setLoading(false);
      });
    } else {
      let url = '';
      if (queryArr.length) {
        url = `http://localhost:8000/accommodations/${param}${handleSelectUrl(id)}${`&${queryArr.join('&')}`}`;
        if (Number(id) === 1) {
          url = `http://localhost:8000/accommodations/${param}${handleSelectUrl(id)}?${queryArr.join('&')}`;
        }
      } else {
        url = `http://localhost:8000/accommodations/${param}${handleSelectUrl(id)}`;
      }
      axios
        .get(url)
        .then((res) => {
          setList(res.data);
          setLoading(false);
          setKeyword();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setList([]);
        });
    }
  };

  const getFilteredList = (e) => {
    setLoading(true);
    const newList = [
      queryArr.filter((el) => {
        return !el.includes('persons=');
      }),
      `persons=${count}`,
    ].flat();
    setQueryArr(newList);
    axios
      .get(`http://localhost:8000/accommodations/${param}?${queryArr.join('&')}`)
      .then((res) => {
        setList(res.data);
        setLoading(false);
        setKeyword();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setList([]);
      });
  };

  const handleResetList = () => {
    axios
      .get(`http://localhost:8000/accommodations/${param}`)
      .then((res) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setList([]);
      });
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
              {city && (
                <ul className='city-list'>
                  {city.map((el) => {
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
              )}
              {city && (
                <ul className='region-list'>
                  {city.map((el) => {
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
              )}
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
          getFilteredList={getFilteredList}
          handleResetList={handleResetList}
        />
        <main>
          {showModal && <Map setShowModal={setShowModal} list={list} />}
          <TopFilter setShowModal={setShowModal} getNewList={getNewList} />
          {!loading && list && (
            <ul className='thumbnail-container mt32'>
              {list.map((el) => {
                return (
                  <Thumbnail
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    promotion={el.promotion}
                    rating={el.rating}
                    score={el.score}
                    review={el.review}
                    region={el.region}
                    remain={el.remain}
                    saleprice={el.saleprice}
                    price={el.price}
                    img={el.img}
                  />
                );
              })}
            </ul>
          )}
          {loading && <LoadingSpinner />}
          {!loading && list && list.length === 0 && <NoData keyword={keyword} />}
        </main>
      </S.Body>
    </>
  );
};

export default AccommodationList;
