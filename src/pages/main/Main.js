import React from 'react';

import { MainStyle } from './Main.styled';
import MainLink from './components/MainLink';

const Main = () => {
  return (
    <>
      <MainStyle>
        <div className='main-img-container'>
          <img
            alt='대표이미지'
            className='main-img'
            src='https://cdn.pixabay.com/photo/2021/11/24/11/01/autumn-6820879__340.jpg'
          />
        </div>
        <MainLink />
      </MainStyle>
    </>
  );
};

export default Main;
