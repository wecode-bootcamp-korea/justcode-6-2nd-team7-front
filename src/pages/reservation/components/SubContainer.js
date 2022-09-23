import { SubContainerStyle } from '../Reservation.Styled';

const SubContainer = () => {
  return (
    <>
      <SubContainerStyle>
        <div className='container'>
          <div>
            <div>숙소이름</div>
            <div>홍대 스타일 게스트하우스</div>
          </div>

          <div>
            <div>객실타입/기간</div>
            <div>더블룸 (객실내 전용욕실) / 1박</div>
          </div>

          <div>
            <div>체크인</div>
            <div>09.24 금 14:00</div>
          </div>

          <div>
            <div>체크아웃</div>
            <div>09.25 토 11:00</div>
          </div>

          <div>
            <span>총 결제 금액</span>
            <span>(VAT포함)</span>
            <div></div>
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

export default SubContainer;
