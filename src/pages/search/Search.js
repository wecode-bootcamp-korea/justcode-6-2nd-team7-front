// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../../atom';
import styled from 'styled-components';
import { useState } from 'react';

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
  const [keyword] = useRecoilState(searchInputState);
  const [searchList, setSearchList] = useState([]);

  // 추후 원희님 필터/카드 컴포넌트 추가되면 수정될 수 있음
  // useEffect(() => {
  //   axios
  //     .get('/data/accommodation/accommodation.json')
  //     //   .get(`http://localhost:8000/accommodation/${param}`)
  //     .then((res) => {
  //       setList(res.data.accommodation);
  //       Object.keys(res.data.accommodation).length === 0 && setList([]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setList([]);
  //     });
  // }, []);

  //const param = useParams().type; => SideFilter, TopFilet등 가져와야 하는데
  //원희님의 도움이 필요할 것 같아요 ㅠ 라이브러리 복잡혀..

  return (
    <SearchContainer>
      <header>' {keyword === '' ? '검색어를 입력해주세요' : keyword} '</header>
      {/* <SideFilter param={param} /> */}
      <div className='result-empty'>
        <div>
          <div>' {keyword} '에 대한 검색결과가 없습니다.</div>
          <br />
          <span>다시 입력해주세요</span>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;
