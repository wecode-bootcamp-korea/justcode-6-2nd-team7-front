import { MainStyle } from './Main.styled';
import MainLink from './components/MainLink';

const Main = () => {
  return (
    <>
      <MainStyle>
        <div className='main-img-container'>
          <img alt='대표이미지' className='main-img' src='images/main/mainImg.png' />
        </div>
        <MainLink />
      </MainStyle>
    </>
  );
};

export default Main;
