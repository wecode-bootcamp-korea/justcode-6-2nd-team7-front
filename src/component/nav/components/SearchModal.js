import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../../../atom';
import styled from 'styled-components';

import EmptyInputModal from './EmptyInputModal';

import * as S from './SeachModal.Styled';

const InputContainer = styled.div`
  display: ${(props) => (props.listStyle === 'block' ? 'none' : 'block')};
  position: absolute;
  input {
    width: 460px;
    border: none;
    background: transparent;
    color: ${(props) => props.inputColor};
    font-size: 17px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${(props) => props.inputColor};
    }
  }
  .none {
    display: none;
  }
`;

const SearchModal = ({ scrollPosition, setListStyle, listStyle, input, setInput, emptySubmit, setEmptySubmit }) => {
  const navigate = useNavigate();
  const [keyword, setKeword] = useRecoilState(searchInputState);
  const [inputColor, setInputColor] = useState('#ffffffc4');
  const body = {
    keyword: keyword.split(' '),
  };

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
    setListStyle('block');
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter' && input !== '') {
      setListStyle('block');
      navigate('/search');
      setKeword(input);
      // axios.post('http://localhost:8000/signup', body).then((res) => {
      //   console.log(res.data.message);
      // });
    } else if (e.key === 'Enter' && input === '') {
      setEmptySubmit(true);
    }
  };

  return (
    <>
      <S.SearchModalBg onClick={cancleSearch} listStyle={listStyle} />
      <InputContainer inputColor={inputColor} listStyle={listStyle}>
        <div>
          <input
            type='text'
            placeholder='지역, 숙소명, 숙소타입'
            value={input}
            onChange={handleInput}
            onKeyDown={pressEnter}
          />
          <FontAwesomeIcon
            onClick={(e) => {
              cancleSearch(e);
              setInput('');
            }}
            icon={faXmark}
            color={scrollPosition > 2 ? '#525252' : '#ffffffc4'}
          />
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
          {emptySubmit && <EmptyInputModal setEmptySubmit={setEmptySubmit} />}
        </S.Recommend>
      </InputContainer>
    </>
  );
};

export default SearchModal;
