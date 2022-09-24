import { SubContainerStyle } from '../Reservation.Styled';

const Sub = () => {
  return (
    <>
      <SubContainerStyle>
        <div className='container'>
          <div>
            <div className='title'>숙소이름</div>
            <div className='content'>
              <span>홍대</span> <span>스타일 게스트하우스</span>
            </div>
          </div>
          <div>
            <div className='title'>객실타입/기간</div>
            <div className='content'>
              <span>더블룸</span> (<span>객실내 전용욕실</span>) / <span>1</span>박
            </div>
          </div>
          <div>
            <div className='title'>체크인</div>
            <div className='content'>
              <span>09.24</span> <span>금</span> <span>14:00</span>
            </div>
          </div>
          <div>
            <div className='title'>체크아웃</div>
            <div className='content'>
              <span>09.25</span> <span>토</span> <span>11:00</span>
            </div>
          </div>

          <div>
            <div className='total'>
              <span className='bold'>총 결제 금액</span>
              <span>(VAT포함)</span>
              <div className='totalPrice'>
                <span>329,000</span>
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
