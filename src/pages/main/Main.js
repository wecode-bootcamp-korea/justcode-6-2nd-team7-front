import MainLink from './components/MainLink';
import News from './components/News';

import { MainStyle } from './Main.styled';

const Main = () => {
  return (
    <>
      <MainStyle>
        <div className='main-img-container'>
          <img alt='대표이미지' className='main-img' src='images/main/mainImg.png' />
        </div>
        <MainLink />
        <News />
      </MainStyle>
    </>
  );
};

export default Main;
