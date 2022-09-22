import { MainContainerStyle } from '../Reservation.Styled';

const MainContainer = () => {
  return (
    <>
      <MainContainerStyle>
        <div className='user-info'>
          <div>예약자 정보</div>
          <div>
            <label for='name'>이름</label>이름
            <input id='name' type='text' />
            <label for='phone'>휴대폰 번호</label>
            <div>개인정보 보호를 위해 안심번호로 숙소에 전송됩니다.</div>
            <input id='phone' type='tel' />
          </div>
        </div>

        <div className='sale'>
          <div>할인 수단 선택</div>
          <div>구매총액</div>
          <button>사용 가능 쿠폰 0장</button>
          <div>40,000원</div>
          <div>일반쿠폰</div>
          <div>-</div>
          <div>중복쿠폰</div>
          <div>-</div>

          <button>포인트 사용 0P</button>
          <input placeholder='0' type='number' />
          <span>P</span>
        </div>

        <div className='payment'>
          <div>결제수단 선택</div>
          <select>
            <option>카카오페이</option>
            <option>토스</option>
            <option>신용/체크카드</option>
            <option>간편계좌이체</option>
            <option>네이버페이</option>
            <option>PAYCO</option>
            <option>법인카드</option>
            <option>휴대폰결제</option>
          </select>

          <div className='check-container'>
            <label>
              <input type='checkbox' />
              <span>전체동의</span>
            </label>
            <div>
              <input type='checkbox' name='check1' />
              <span className='underline'>숙소이용규칙 및 취소/환불규정 동의</span>
              <span className='essential'>(필수)</span>
            </div>
            <div>
              <input type='checkbox' name='check1' />
              <span className='underline'>개인정보 수집 및 이용 동의</span>
              <span className='essential'>(필수)</span>
            </div>
            <div>
              <input type='checkbox' name='check1' />
              <span className='underline'>개인정보 제 3자 제공 동의</span>
              <span className='essential'>(필수)</span>
            </div>
          </div>
        </div>
      </MainContainerStyle>
    </>
  );
};

export default MainContainer;
