import React from 'react';
import MyPage from '../MyPage';
import * as S from '../MyPage.Styled';

function My() {
  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <p>내정보</p>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default My;
