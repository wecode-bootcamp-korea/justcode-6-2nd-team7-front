import React from 'react';
import MyPage from '../MyPage';
import * as S from '../MyPage.Styled';
import * as A from './Points.Styled';

function Points() {
  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <A.PointContainer>
          <p className='points'>포인트</p>
          <div className='point-box'>
            <div>
              <p className='my-points'>내 포인트</p>
              <h2>0 P</h2>
              <div>
                <p className='point-delete'>30일 내 0 P가 소멸될 예정이에요.</p>
              </div>
            </div>
          </div>
        </A.PointContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default Points;
