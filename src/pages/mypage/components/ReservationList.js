import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../../atom';
import MyPage from '../MyPage';
import DeleteModal from './DeleteModal';
import NoReservation from './NoReservation';
import * as S from '../MyPage.Styled';
import * as A from './ReservationList.Styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ReservationList = () => {
  const [reservationList, setReservationList] = useState([]);
  const [modal, setModal] = useState(false);
  const userId = useRecoilValue(userIdState);

  const navigate = useNavigate();

  // 데이터 받아올때 유저아이디 포함 요청
  useEffect(() => {
    axios
      .get('http://localhost:8000/my/reservations', {
        headers: { id: userId },
      })
      .then((res) => {
        setReservationList(res.data.reservation);
      });
  }, [reservationList]);

  console.log(reservationList);

  const handleDelete = () => {
    setModal(true);
  };

  const week = ['월', '화', '수', '목', '금', '토', '일'];

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
            {reservationList?.map((list) => {
              return (
                <div className='reservation-container' key={list.hotel_id}>
                  <button className='delete' onClick={handleDelete}>
                    X
                  </button>

                  <img src={list.img} alt='reservation-img' />

                  <div className='reservation-content'>
                    <span>이용완료</span>
                    <h2>{list.name}</h2>
                    <p>
                      {list.date1} {week[Number(list.day1)]} - {list.date2} {week[Number(list.day2)]} {list.myutbak}박
                    </p>
                  </div>
                  <button
                    className='rebook'
                    onClick={() => {
                      navigate(`/detail/${list.hotel_id}`);
                    }}>
                    다시 예약
                  </button>
                </div>
              );
            })}
            {reservationList.length === 0 && <NoReservation />}
          </div>
          {modal && <DeleteModal setReservationList={setReservationList} setModal={setModal} />}
        </A.ReservationContainer>
      </S.MyPageContainer>
    </S.Header>
  );
};

export default ReservationList;
