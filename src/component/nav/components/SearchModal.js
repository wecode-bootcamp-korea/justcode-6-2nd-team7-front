import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import * as S from './SeachModal.Styled';

const SearchModal = ({ scrollPosition, setIistStyle }) => {
  const [inputColor, setInputColor] = useState('#ffffffc4');
  // const [searchChange, setSearchChange] = useState('');{
  const recommendArr = [
    { id: 1, keyword: '강남' },
    { id: 2, keyword: '서울' },
    { id: 3, keyword: '부산 호텔' },
    { id: 4, keyword: '제주도 게스트하우스' },
    { id: 5, keyword: '게스트하우스' },
  ];

  useEffect(() => {
    scrollPosition > 2 ? setInputColor('#525252') : setInputColor('#ffffffc4');
  }, [scrollPosition]);

  const cancleSearch = () => {
    setIistStyle('block');
  };

  // const handleInput = (e) => {
  //   setSearchChange(e.target.value);
  // };

  const InputContainer = styled.div`
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
      }
    }
  `;

  return (
    <>
      <S.SearchModalBg onClick={cancleSearch} />
      <InputContainer>
        <div>
          <input placeholder='지역, 숙소명, 숙소타입' />
          {/* <input value={searchChange} onChange={handleInput} placeholder='지역, 숙소명, 숙소타입' /> */}
          <FontAwesomeIcon onClick={cancleSearch} icon={faXmark} color={scrollPosition > 2 ? '#525252' : '#ffffffc4'} />
        </div>
        <S.Recommend>
          <div className='recommend-container'>
            <div className='title'>추천 검색어</div>
            {recommendArr.length !== 0 &&
              recommendArr.map((recommend) => {
                return (
                  <Link to='/login' onClick={cancleSearch} key={recommend.id}>
                    {recommend.keyword}
                  </Link>
                );
              })}
          </div>
        </S.Recommend>
      </InputContainer>
    </>
  );
};

export default SearchModal;
