import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { startDateState, endDateState, reservInfoState } from '../../../atom';

import SubmitModal from './SubmitModal';

import { SubContainerStyle } from '../Reservation.Styled';

const Sub = ({ modalMsg, setModalMsg }) => {
  const [startDate] = useRecoilState(startDateState);
  const [endDate] = useRecoilState(endDateState);
  const [info] = useRecoilState(reservInfoState);
  const [modal, setModal] = useState(false);
  const period = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const clickPayBtn = () => {
    setModal(true);
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

        <button onClick={clickPayBtn}>결제하기</button>
        {modal && <SubmitModal setModal={setModal} modalMsg={modalMsg} setModalMsg={setModalMsg} />}
      </SubContainerStyle>
    </>
  );
};

export default Sub;
