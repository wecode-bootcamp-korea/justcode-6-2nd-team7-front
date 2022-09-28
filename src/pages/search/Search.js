import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Map from '../accommodation/components/Map';
import SideFilter from '../accommodation/components/SideFilter';
import TopFilter from '../accommodation/components/TopFilter';
import Thumbnail from '../accommodation/components/Thumbnail';
import NoData from '../accommodation/components/NoData';
import LoadingSpinner from '../accommodation/components/LoadingSpinner';

import { handleSelectUrl, getDistanceFromLatLonInKm } from '../accommodation/data/functions';

import * as S from '../accommodation/AccommodationList.styled';

const SearchContainer = styled.div`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 139px;
    margin-top: 72px;
    background-color: ${({ theme }) => theme.colors.greyBg};
    color: ${({ theme }) => theme.colors.bkText};
    font-size: 38px;
  }
`;

const Search = () => {
  const params = useParams();
  const [list, setList] = useState();
  const [keyword, setKeyword] = useState();
  const [showModal, setShowModal] = useState(false);
  const [firstDateShow, setFirstDateShow] = useState(false);
  const [secondDateShow, setSecondDateShow] = useState(false);
  const [loading, setLoading] = useState(true);

  //처음 검색했을 때 받아오는 정보
  useEffect(() => {
    axios
      .get('/data/accommodation/accommodation.json')
      // .get(`/data/accommodation/accommodationNoData.json`)
      // .get(`http://localhost:8000/accommodation/result?keyword=${params.keyword.replace(/ /g, '|')}`)
      .then((res) => {
        // console.log('res.data : ', res.data.data);
        setList(res.data.data);
        setLoading(false);
        res.data.data.length === 0 && setList([]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  //탑필터 누를때마다 받아오는 정보
  const getNewList = (id) => {
    setLoading(true);
    if (Number(id) === 2) {
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
      axios
        .get(`/data/accommodation/accommodation.json`)
        // .get(`/data/accommodation/accommodationNoData.json`)
        // .get(`http://localhost:8000/accommodation/result?keyword=${params.keyword.replace(/ /g, '|')}`)
        // .get(`http://localhost:8000/accommodation/${param}${handleSelectUrl(id)}`)

        .then((res) => {
          // console.log(res);
          setList(res.data.data);
          setLoading(false);
          setKeyword(params.keyword);
          res.data.data.length === 0 && setList([]);
        })
        .catch((err) => {
          console.log(err);
          setList([]);
        });
    }
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

  return (
    <SearchContainer>
      <header>' {params.keyword} '</header>
      <S.Body>
        <SideFilter
          param={'search'}
          firstShow={firstDateShow}
          setFirstShow={setFirstDateShow}
          secondShow={secondDateShow}
          setSecondShow={setSecondDateShow}
        />
        <main>
          {showModal && <Map setShowModal={setShowModal} list={list} />}
          <TopFilter setShowModal={setShowModal} getNewList={getNewList} />
          {!loading && (
            <ul className='thumbnail-container mt32'>
              {list.map((el) => {
                return (
                  <Thumbnail
                    key={el.name}
                    name={el.name}
                    promotion={el.promotion}
                    rating={el.rating}
                    score={el.score}
                    review={el.review}
                    region={el.region}
                    remain={el.remain}
                    price={el.price}
                    saleprice={el.saleprice}
                    img={el.img}
                  />
                );
              })}
            </ul>
          )}
          {loading && <LoadingSpinner />}
          {list && list.length === 0 && <NoData keyword={keyword} />}
        </main>
      </S.Body>
    </SearchContainer>
  );
};

export default Search;
