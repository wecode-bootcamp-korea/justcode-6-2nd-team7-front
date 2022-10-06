import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const LoadingSpinner = (props) => {
  return (
    <Loading>
      <CircularProgress color='info' />
      <p className='bold '>잠시만 기다려주세요.</p>
      <br />
      <p>로딩 중입니다.</p>
    </Loading>
  );
};

export default LoadingSpinner;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 300;

  .bold {
    margin-top: 25px;
    font-weight: 700;
    font-size: 20px;
  }
`;
