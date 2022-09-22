import MainLink from './components/MainLink';
import News from './components/News';
import AppDown from './components/AppDown';

import { MainStyle } from './Main.styled';

const Main = () => {
  return (
    <>
      <MainStyle>
        <div className='main-img-container'>
          <img alt='대표이미지' className='main-img' src='images/main/main.png' />
        </div>
        <MainLink />
        <News />
        <AppDown />
      </MainStyle>
    </>
  );
};

export default Main;
