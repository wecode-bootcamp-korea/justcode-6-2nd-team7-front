import React, { useState } from 'react';
import MyPage from '../MyPage';

import * as S from '../MyPage.Styled';
import NoReservation from './NoReservation';
import * as A from './ReservationList.Styled';

function ReservationList() {
  const [reservation, setReservation] = useState(false);

  const handleDelete = () => {
    alert('예약이 취소 됩니다.');
    setReservation((prev) => true);
  };

  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <A.ReservationContainer>
          <div>
            <p className='reservation'>예약내역</p>
            {!reservation && <p>이용내역</p>}
          </div>
          <div className='more-reservation'>
            {!reservation ? (
              <div className='reservation-container'>
                <button className='delete' onClick={handleDelete}>
                  X
                </button>
                <img
                  src='https://image.goodchoice.kr/resize_490x348/affiliate/2021/12/27/61c9485177c56.jpg'
                  alt='reservation-img'
                />
                <div className='reservation-content'>
                  <span>이용완료</span>
                  <h2>조선 팰리스 서울 강남 럭셔리 컬렉션</h2>
                  <p>10.23 토 - 10.24 일 . 1박</p>
                </div>
                <button className='rebook'>다시 예약</button>
              </div>
            ) : (
              <NoReservation />
            )}
          </div>
        </A.ReservationContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default ReservationList;
