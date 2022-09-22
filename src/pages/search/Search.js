import styled from 'styled-components';

const SearchContainer = styled.div`
  height: 111px;
  margin-top: 72px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  color: ${({ theme }) => theme.colors.bkText};
  font-size: 38px;
  text-align: center;
`;

const Search = () => {
  return (
    <SearchContainer>
      <header>'입력한 검색어'</header>
    </SearchContainer>
  );
};

export default Search;
