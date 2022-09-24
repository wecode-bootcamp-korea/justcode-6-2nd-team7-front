// import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchInput } from '../../atom';
import styled from 'styled-components';

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
  const [input] = useRecoilState(searchInput);
  // const param = useParams().type;

  return (
    <SearchContainer>
      <header>' {input === '' ? '검색어를 입력해주세요.' : input} '</header>
      {/* <SideFilter param={param} /> */}
      <section></section>
    </SearchContainer>
  );
};

export default Search;
