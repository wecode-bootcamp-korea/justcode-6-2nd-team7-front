import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 300;

  .bold {
    font-weight: 700;
    font-size: 20px;
  }
`;

const NoData = ({ keyword }) => {
  return (
    <>
      {!keyword && (
        <Main>
          <p className='bold'>현재 조건에 맞는 숙소가 없습니다.</p>
          <br />
          <p>
            지역을 변경하거나
            <br />
            일정, 상세조건을 재설정해 보세요.
          </p>
        </Main>
      )}
      {keyword && (
        <Main>
          <p className='bold'>'{keyword}'에 대한 검색결과가 없습니다.</p>
          <br />
          <p>다시 입력해주세요.</p>
        </Main>
      )}
    </>
  );
};
export default NoData;
