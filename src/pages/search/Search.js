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
  const [search] = useRecoilState(searchInput);
  // const param = useParams().type;

  return (
    <SearchContainer>
      <header>' {search} '</header>
      {/* <SideFilter param={param} /> */}
      <section></section>
    </SearchContainer>
  );
};

export default Search;
