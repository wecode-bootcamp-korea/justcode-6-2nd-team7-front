import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';

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

  .result-empty {
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
  }
`;
const Search = () => {
  const params = useParams();
  console.log(params.keyword.replace(/ /g, '|'));

  useEffect(() => {
    axios
      .get('/data/accommodation/accommodation.json')
      // .get(`http://localhost:8000/accommodation/result/?keyword=${keyword.replace(/ /g, '|')}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <SearchContainer>
      <header>' {params.keyword === '' ? '검색어를 입력해주세요' : params.keyword} '</header>
      <div className='result-empty'>
        <div>
          <div>' {params.keyword} '에 대한 검색결과가 없습니다.</div>
          <br />
          <span>다시 입력해주세요</span>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
