import React from 'react';

import { MainStyle } from './Main.styled';
import MainLink from './component/MainLink';

const Main = () => {
  return (
    <>
      <MainStyle>
        <img alt='대표이미지' src='https://cdn.pixabay.com/photo/2021/11/24/11/01/autumn-6820879__340.jpg' />
        <MainLink />
      </MainStyle>
    </>
  );
};

export default Main;
