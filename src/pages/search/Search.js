import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 139px;
  margin-top: 72px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  color: ${({ theme }) => theme.colors.bkText};
  font-size: 38px;
`;

const Search = ({ searchInput }) => {
  return <SearchContainer>{/* <header>{`'${searchInput}'`} </header> */}</SearchContainer>;
};

export default Search;
