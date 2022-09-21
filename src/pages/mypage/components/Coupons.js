import React from 'react';
import MyPage from '../MyPage';
import * as S from '../MyPage.Styled';
import * as A from './Coupons.Styled';

function Coupons() {
  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <A.CouponsContainer>
          <div className='coupons-box'>
            <p className='coupons'>보유쿠폰</p>
            <p className='my-coupons'>0 장</p>
          </div>
          <div>
            <p className='content'>보유한 쿠폰이 없습니다.</p>
          </div>
        </A.CouponsContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default Coupons;
