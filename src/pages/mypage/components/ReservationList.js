import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { deleteReservationState, userIdState } from '../../../atom';
import MyPage from '../MyPage';
import DeleteModal from './DeleteModal';
import NoReservation from './NoReservation';
import * as S from '../MyPage.Styled';
import * as A from './ReservationList.Styled';
import axios from 'axios';

function ReservationList() {
  const [reservationList, setReservationList] = useState([]);
  const [modal, setModal] = useRecoilState(deleteReservationState);
  const userId = useRecoilValue(userIdState);

  console.log(userId);

  // 데이터 받아올때 유저아이디 포함 요청
  useEffect(() => {
    axios.get('data/my/reservationList.json').then((res) => setReservationList(res.data.reservation));
  }, []);

  const handleDelete = () => {
    setModal(true);
  };

  const getDayOfWeek = (date) => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(`2022-${date}`).getDay()];
    return dayOfWeek;
  };

  const getDay = (date1, date2) => {
    const splitDay1 = date1.split('-');
    const splitDay2 = date2.split('-');

    const day1 = new Date(splitDay1[0], splitDay1[1], splitDay1[2]);
    const day2 = new Date(splitDay2[0], splitDay2[1], splitDay2[2]);

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
            {!reservationList && <p>이용내역</p>}
          </div>
          <div className='more-reservation'>
            {reservationList ? (
              reservationList?.map((el) => {
                return (
                  <div className='reservation-container'>
                    <button className='delete' onClick={handleDelete}>
                      X
                    </button>
                    {modal && <DeleteModal />}
                    <img src={el.img} alt='reservation-img' />

                    <div className='reservation-content'>
                      <span>이용완료</span>
                      <h2>{el.name}</h2>
                      <p>
                        {el.date1} {getDayOfWeek(el.date1)} - {el.date2} {getDayOfWeek(el.date2)}{' '}
                        {getDay(el.date1, el.date2)}박
                      </p>
                    </div>
                    <button className='rebook'>다시 예약</button>
                  </div>
                );
              })
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
