import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { startDateState, endDateState, reservInfoState } from '../../../atom';
import styled from 'styled-components';

import { SubContainerStyle } from '../Reservation.Styled';

const ModalContainer = styled.div`
  .bg {
    display: 'flex';
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    background-color: #000000c7;
    color: ${({ theme }) => theme.colors.text};
    z-index: 99;
  }

  .reserv-container {
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

    .reserv-btn {
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
      .submit {
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }
  }
`;

const Sub = () => {
  const [startDate] = useRecoilState(startDateState);
  const [endDate] = useRecoilState(endDateState);
  const [info] = useRecoilState(reservInfoState);
  const [reservModal, setReservModal] = useState(false);
  const period = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const clickReservBtn = () => {
    setReservModal(true);
  };

  const clickBg = () => {
    setReservModal(false);
  };

  const handleSubmitBtn = () => {
    setReservModal(false);
  };

  return (
    <>
      <SubContainerStyle>
        <div className='container'>
          <div>
            <div className='title'>숙소이름</div>
            <div className='content'>
              <span>{info.name}</span>
            </div>
          </div>
          <div>
            <div className='title'>객실타입/기간</div>
            <div className='content'>
              <span> {endDate && info.roomType}</span> / <span>{endDate && period}</span>박
            </div>
          </div>
          <div>
            <div className='title'>체크인</div>
            <div className='content'>
              <span>
                {startDate.getMonth() + 1}.{startDate.getDate()}
              </span>{' '}
              <span>{week[startDate.getDay()]}</span> <span>15:00</span>
            </div>
          </div>
          <div>
            <div className='title'>체크아웃</div>
            <div className='content'>
              <span>
                {endDate && endDate.getMonth() + 1}.{endDate && endDate.getDate()}
              </span>{' '}
              <span>{endDate && week[endDate.getDay()]}</span> <span>11:00</span>
            </div>
          </div>

          <div>
            <div className='total'>
              <span className='bold'>총 결제 금액</span>
              <span>(VAT포함)</span>
              <div className='totalPrice'>
                <span>{info.totalPrice.toLocaleString()}</span>
                <span>원</span>
              </div>
            </div>
            <ul>
              <li>해당 객실가는 세금, 봉사료가 포함된 금액입니다.</li>
              <li>
                결제완료 후 <span>예약자 이름</span>으로 바로 <span>체크인</span> 하시면 됩니다.
              </li>
            </ul>
          </div>
        </div>

        <button onClick={clickReservBtn}>결제하기</button>
        {reservModal && (
          <ModalContainer>
            <div className='bg' onClick={clickBg}></div>
            <div className='reserv-container'>
              <p>결제하시겠습니까?</p>
              <div className='reserv-btn'>
                <button
                  className='cancel'
                  onClick={() => {
                    setReservModal(false);
                  }}>
                  취소
                </button>
                <button className='submit' onClick={handleSubmitBtn}>
                  결제하기
                </button>
              </div>
            </div>
          </ModalContainer>
        )}
      </SubContainerStyle>
    </>
  );
};

export default Sub;
