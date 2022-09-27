import { useRecoilState } from 'recoil';
import { startDateState, endDateState, reservInfoState } from '../../../atom';

import { SubContainerStyle } from '../Reservation.Styled';

const Sub = () => {
  const [startDate] = useRecoilState(startDateState);
  const [endDate] = useRecoilState(endDateState);
  const [info] = useRecoilState(reservInfoState);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
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
              <span>{info.type}</span> / <span>{endDate.getDate() - startDate.getDate()}</span>박
            </div>
          </div>
          <div>
            <div className='title'>체크인</div>
            <div className='content'>
              <span>
                {startDate.getMonth() + 1}.{startDate.getDate()}
              </span>
              <span>{week[startDate.getDay()]}</span> <span>15:00</span>
            </div>
          </div>
          <div>
            <div className='title'>체크아웃</div>
            <div className='content'>
              <span>
                {endDate.getMonth() + 1}.{endDate.getDate()}
              </span>
              <span>{week[endDate.getDay()]}</span> <span>11:00</span>
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
              <li>해당 객실가는 세금, 봉사료가 포함된 금액입니다</li>
              <li>
                결제완료 후 <span>예약자 이름</span>으로 바로 <span>체크인</span> 하시면 됩니다
              </li>
            </ul>
          </div>
        </div>

        <button>결제하기</button>
      </SubContainerStyle>
    </>
  );
};

export default Sub;
