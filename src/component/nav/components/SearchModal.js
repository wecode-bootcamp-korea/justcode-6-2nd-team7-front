import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import * as S from './SeachModal.Styled';

const SearchModal = ({ scrollPosition, setIistStyle }) => {
  const [inputColor, setInputColor] = useState('#ffffffc4');
  const [recommendArr, setRecommendArr] = useState([]);

  useEffect(() => {
    scrollPosition > 2 ? setInputColor('#525252') : setInputColor('#ffffffc4');
  }, [scrollPosition]);

  useEffect(() => {
    fetch('/data/nav/recommend.json')
      .then((res) => res.json())
      .then((req) => {
        setRecommendArr(req.data);
      });
  }, []);

  const cancleSearch = () => {
    setIistStyle('block');
  };

  const SearchInput = styled.div`
    position: absolute;
    input {
      width: 460px;
      border: none;
      background: transparent;
      color: ${inputColor};
      font-size: 17px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${inputColor};
        font-size: 17px;
      }
    }
  `;

  return (
    <>
      <S.SearchModalBg onClick={cancleSearch} />
      <SearchInput>
        <div>
          <input placeholder='지역, 숙소명, 숙소타입' />
          <FontAwesomeIcon onClick={cancleSearch} icon={faXmark} color={scrollPosition > 2 ? '#525252' : '#ffffffc4'} />
        </div>
        <S.Recommend>
          <div className='recommend-container'>
            <div className='title'>추천 검색어</div>
            {recommendArr.length != 0 &&
              recommendArr.map((recommend) => {
                return (
                  <Link to='/login' onClick={cancleSearch}>
                    {recommend}
                  </Link>
                );
              })}
          </div>
        </S.Recommend>
      </SearchInput>
    </>
  );
};

export default SearchModal;
