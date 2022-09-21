import React from 'react';
import styled from 'styled-components';

const NoReservationContainer = styled.div`
  margin-left: 20%;

  .no-reservation {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .contents {
    color: rgb(93, 93, 93);
    font-weight: 400;
    text-align: center;
    line-height: 1.5rem;
  }

  .reservation-btn {
    width: 165px;
    height: 48px;
    margin-top: 44px;
    border: 1px solid rgb(242, 17, 76);
    background: #fff;
    border-radius: 4px;
    color: rgb(230, 28, 81);
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
  }
`;

function NoReservation() {
  return (
    <NoReservationContainer>
      <div>
        <p className='no-reservation'>예약 내역이 없습니다.</p>
        <p className='contents'>
          최저가로 예약 가능한
          <br />
          숙소들을 지금 만나세요!
        </p>
      </div>
      <button className='reservation-btn'>다양한 숙소 보러가기</button>
    </NoReservationContainer>
  );
}

export default NoReservation;
