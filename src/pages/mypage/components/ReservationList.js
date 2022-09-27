import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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

  const getDayOfWeek = (date) => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(`2022-${date}`).getDay()];
    return dayOfWeek;
  };

  const getDay = (date1, date2) => {
    const splitDay1 = date1.split('.');
    const splitDay2 = date2.split('.');

    const day1 = new Date(2022, splitDay1[0], splitDay1[1]);
    const day2 = new Date(2022, splitDay2[0], splitDay2[1]);

    const time = day2.getTime() - day1.getTime();
    const elapsedDay = time / 1000 / 60 / 60 / 24;

    return elapsedDay;
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
                  <p>
                    10.23 {getDayOfWeek('5.01')} - 10.24 {getDayOfWeek('5-02')} . {getDay('5.01', '5.07')}박
                  </p>
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
