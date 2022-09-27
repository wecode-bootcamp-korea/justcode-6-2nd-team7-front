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

  /* .result-empty {
    text-align: center;
    width: 635px;
    height: 150px;
    margin: 150px 0px 0px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;

    span {
      font-weight: 400;
    }
  } */
`;
// 사용하는 컴포넌트
// 탑필터, 사이드필터, 썸네일

const Search = () => {
  const params = useParams();
  const [list, setList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [firstDateShow, setFirstDateShow] = useState(false);
  const [secondDateShow, setSecondDateShow] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [keyword, setKeyword] = useState();

  //처음 검색했을 때 받아오는 정보
  useEffect(() => {
    axios
      .get('/data/accommodation/accommodation.json')
      // .get(`http://localhost:8000/accommodation/result?keyword=${params.keyword.replace(/ /g, '|')}`)
      .then((res) => {
        // console.log(res);
        setList(res.data.accommodation);
        setLoading(false);
        res.data.accommodation.length === 0 && setList([]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //탑필터 누를때마다 받아오는 정보
  const getNewList = (id) => {
    setLoading(true);

    // if (Number(id) === 2) {
    //   const getLatLng = (res) => {
    //     const myLat = res.coords.latitude;
    //     const myLng = res.coords.longitude;
    //     // handleSortList(myLat, myLng);
    //   };
    //   navigator.geolocation.getCurrentPosition(getLatLng, (err) => {
    //     setKeyword('no location');
    //     setList([]);
    //     setLoading(false);
    //   });
    // } else {
    axios
      .get(`/data/accommodation/accommodation.json`)
      // .get(`http://localhost:8000/accommodation/result?keyword=${params.keyword.replace(/ /g, '|')}`)
      .then((res) => {
        // console.log(res);
        setList(res.data.accommodation);
        setLoading(false);
        // setKeyword();
        res.data.accommodation.length === 0 && setList([]);
      })
      .catch((err) => {
        console.log(err);
        setList([]);
      });
    // }
  };

  return (
    <SearchContainer>
      <header>' {params.keyword === '' ? '검색어를 입력해주세요' : params.keyword} '</header>
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
          {list && list.length === 0 && <NoData keyword={params.keyword} />}
        </main>
      </S.Body>
    </SearchContainer>
  );
};

export default Search;
