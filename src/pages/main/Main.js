import styled from 'styled-components';
import MainLink from './components/MainLink';
import News from './components/News';
import AppDown from './components/AppDown';
import Event from './components/Event';

const Main = () => {
  return (
    <MainStyle>
      <div className='main-img-container'>
        <img alt='대표이미지' className='main-img' src='images/main/main.png' />
      </div>
      <MainLink />
      <News />
      <AppDown />
      <Event />
    </MainStyle>
  );
};

export const MainStyle = styled.div`
  margin-top: 100px;

  .main-img-container {
    display: flex;
    justify-content: center;
    .main-img {
      width: 924px;
      height: 500px;
      margin: auto;
    }
  }
`;

export default Main;
