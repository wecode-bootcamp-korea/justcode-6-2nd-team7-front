import { MainContainerStyle } from '../Reservation.Styled';

const MainContainer = () => {
  return (
    <>
      <MainContainerStyle>
        <div className='user-info container'>
          <h3 className='title'>예약자 정보</h3>

          <div>
            <div>
              <label htmlFor='name'>예약자 이름</label>
              <input className='input-info' id='name' type='text' placeholder='체크인 시 필요한 정보입니다.' />
              <div className='input-valid small-text'>
                한글, 영문, 숫자만 입력 가능.(문자 사이 공백은 1칸만 입력 가능)
              </div>
            </div>

            <div>
              <label htmlFor='phone'>휴대폰 번호</label>
              <div className='small-text'>개인정보 보호를 위해 안심번호로 숙소에 전송됩니다.</div>
              <input className='input-info' id='phone' type='tel' placeholder='체크인 시 필요한 정보입니다.' />
              <div className='input-valid small-text'>휴대폰 번호를 확인해주세요.</div>
            </div>
          </div>
        </div>

        <div className='sale container'>
          <h3 className='title'>할인 수단 선택</h3>

          <p>
            <div>구매총액</div>
            <div className='totalPrice'>40,000원</div>
          </p>
          <button className='button-line'>사용 가능 쿠폰 0장</button>
          <p>
            <div className='small-text'>일반쿠폰</div>
            <div>-</div>
          </p>
          <p>
            <div className='small-text'>중복쿠폰</div>
            <div>-</div>
          </p>
          <p className='button-line'>
            <button>포인트 사용 0P</button>
            <div>
              <input className='input-point' placeholder='0' type='text' dir='rtl' />
              <span>P</span>
            </div>
          </p>
          <p className='button-line'>
            <button>상품권 사용</button>
            <div>-</div>
          </p>
        </div>

        <div className='payment container'>
          <h3 className='title'>결제수단 선택</h3>

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
              <span className='check-title title'>전체동의</span>
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
