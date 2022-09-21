import React from 'react';
import MyPage from '../MyPage';
import * as S from '../MyPage.Styled';
import styled from 'styled-components';

export const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px;

  .coupons-box {
    display: flex;
    padding-left: 20px;

    .coupons {
      margin-right: 20px;
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.mainColor};
    }

    .my-coupons {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  .content {
    padding: 100px;
    padding-left: 200px;
    font-size: 20px;
    font-weight: bold;
  }
`;

function Coupons() {
  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <CouponsContainer>
          <div className='coupons-box'>
            <p className='coupons'>보유쿠폰</p>
            <p className='my-coupons'>0 장</p>
          </div>
          <div>
            <p className='content'>보유한 쿠폰이 없습니다.</p>
          </div>
        </CouponsContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default Coupons;
