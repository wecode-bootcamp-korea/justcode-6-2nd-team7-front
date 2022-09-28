import axios from 'axios';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { reservationIdState, reservationListState, reservationModalState, userIdState } from '../../../atom';

const DeleteContainer = styled.div`
  .bg {
    display: 'flex';
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.modalBg};
    color: ${({ theme }) => theme.colors.text};
    opacity: calc() 0.4;
    z-index: 99;
  }

  .logout-container {
    position: fixed;
    top: 38%;
    left: 40%;
    width: 360px;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
    z-index: 100;

    p {
      width: 100%;
      padding: 50px 30px 40px;
      border-bottom: 1px solid #b8b8b8;
      font-size: 16px;
      color: #000000de;
    }

    .logout-btn {
      display: flex;
      justify-content: end;
      padding: 0px 15px;
      button {
        width: 70px;
        height: 48px;
        border: none;
        outline: none;
        background-color: #fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
      }
      .cancel {
        color: ${({ theme }) => theme.colors.text};
      }
      .logout {
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }
  }
`;

const DeleteModal = () => {
  const [, setModal] = useRecoilState(reservationModalState);
  const [reservationID] = useRecoilState(reservationIdState);
  const [, setReservationList] = useRecoilState(reservationListState);
  const userId = useRecoilValue(userIdState);

  const clickBg = () => {
    setModal(false);
  };

  console.log(reservationID);

  // 삭제 통신 예약아이디
  const handleLogout = () => {
    setModal(false);

    axios.delete('http://localhost:8000/my/reservations', { data: { id: userId } }).then((res) => {
      if (res.statusText === 'OK') {
        axios
          .get('http://localhost:8000/my/reservations', {
            headers: { id: userId },
          })
          .then((res) => setReservationList(res.data.reservation));
      }
    });
  };

  return (
    <DeleteContainer>
      <div className='bg' onClick={clickBg}></div>
      <div className='logout-container'>
        <p>예약을 취소 하시겠습니까?</p>
        <div className='logout-btn'>
          <button
            className='cancel'
            onClick={() => {
              setModal(false);
            }}>
            취소
          </button>
          <button className='logout' onClick={handleLogout}>
            삭제
          </button>
        </div>
      </div>
    </DeleteContainer>
  );
};

export default DeleteModal;
