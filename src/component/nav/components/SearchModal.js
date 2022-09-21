import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchModalBg = styled.div`
  position: fixed;
  top: 72px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #00000059;
`;

const SearchModal = ({ scrollPosition }) => {
  const [inputColor, setInputColor] = useState('#ffffffc4');

  useEffect(() => {
    scrollPosition > 2 ? setInputColor('#525252') : setInputColor('#ffffffc4');
  }, [scrollPosition]);

  const SearchInput = styled.div`
    display: flex;
    input {
      width: 460px;
      border: none;
      background: transparent;
      color: black;
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
      <SearchModalBg />
      <SearchInput>
        <input placeholder='지역, 숙소명, 숙소타입' />
        <FontAwesomeIcon icon={faXmark} color={scrollPosition > 2 ? '#525252' : '#ffffffc4'} />
      </SearchInput>
    </>
  );
};

export default SearchModal;
