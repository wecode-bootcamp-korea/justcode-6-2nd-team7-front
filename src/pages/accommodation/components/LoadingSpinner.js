import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10%;
`;

const LoadingSpinner = (props) => {
  return (
    <Loading>
      <CircularProgress color='info' />
    </Loading>
  );
};

export default LoadingSpinner;
