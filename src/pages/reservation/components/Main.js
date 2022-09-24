import { useState } from 'react';
import { MainContainerStyle } from './Main.Styled';

const Main = () => {
  const [inputs, setInputs] = useState({
    userName: '',
    phone: '',
    coupon: 0,
    point: 0,
    pointInput: 0,
  });
  const { userName, phone, coupon, point, pointInput } = inputs;
  const [checkList, setCheckList] = useState([]);
  const [phoneValid, setPhoneValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);

  //input 입력값 업데이트
  const changeInput = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  //예약자 이름 유효성 검사
  const handledNameInput = (e) => {
    const valid = /^[0-9|a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣 ]*$/;
    6 > e.target.value.length > 0 && e.target.value.split(' ').length - 1 < 2 && valid.test(e.target.value)
      ? setNameValid(true)
      : setNameValid(false);
  };

  //전화번호 유효성검사
  const handlePhoneInput = (e) => {
    const valid = /^[0-9]*$/;
    e.target.value.length > (9 || 1) && valid.test(e.target.value) ? setPhoneValid(true) : setPhoneValid(false);
  };

  //체크박스 1개 선택or해제 시 checkList state값 반영
  const handleSingleCheck = (checked, name) => {
    checked ? setCheckList((prev) => [...prev, name]) : setCheckList(checkList.filter((check) => check !== name));
  };

  //전체동의 클릭 시 전체 선택or해제
  const handleAllCheck = (e) => {
    e.target.checked ? setCheckList(['check1', 'check2', 'check3']) : setCheckList([]);
  };

  return (
    <>
      <MainContainerStyle>
        <div className='user-info container'>
          <h3 className='title'>예약자 정보</h3>
          <div>
            <div>
              <label htmlFor='name'>예약자 이름</label>
              <input
                className='input-info'
                id='userName'
                type='text'
                placeholder='체크인 시 필요한 정보입니다.'
                value={userName}
                onChange={(e) => {
                  changeInput(e);
                  handledNameInput(e);
                }}
              />
              <div className={` name-valid input-valid small-text ${nameValid && 'none'}`}>
                한글, 영문, 숫자 5자리 입력 가능.(문자 사이 공백은 1칸만 입력 가능)
              </div>
            </div>
            <div>
              <label htmlFor='phone'>휴대폰 번호</label>
              <div className='small-text'>개인정보 보호를 위해 안심번호로 숙소에 전송됩니다.</div>
              <input
                className='input-info'
                id='phone'
                type='tel'
                placeholder='체크인 시 필요한 정보입니다.'
                maxLength='13'
                value={phone}
                onChange={(e) => {
                  changeInput(e);
                  handlePhoneInput(e);
                }}
              />
              <div className={`input-valid small-text ${phoneValid && 'none'}`}>휴대폰 번호를 확인해주세요.</div>
            </div>
          </div>
        </div>

        <div className='sale container'>
          <h3 className='title'>할인 수단 선택</h3>
          <div className='line'>
            <div>구매총액</div>
            <div className='totalPrice'>40,000원</div>
          </div>
          <button className='button-line'>
            사용 가능 쿠폰 <span>{coupon}</span>장
          </button>
          <div className='line'>
            <div className='small-text'>일반쿠폰</div>
            <div>-</div>
          </div>
          <div className='line'>
            <div className='small-text'>중복쿠폰</div>
            <div>-</div>
          </div>
          <div className='button-line line'>
            <button>
              포인트 사용 <span>{point}</span>P
            </button>
            <div>
              <input
                className='input-point'
                id='pointInput'
                type='text'
                placeholder='0'
                dir='rtl'
                value={pointInput}
                onChange={changeInput}
              />
              <span>P</span>
            </div>
          </div>
          <div className='button-line line'>
            <button>상품권 사용</button>
            <div>-</div>
          </div>
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
            <div>
              <label>
                <input
                  type='checkbox'
                  name='entireCheck'
                  checked={checkList.length === 3 ? true : false}
                  onChange={handleAllCheck}
                />
                <span className='check-title title'>전체동의</span>
              </label>
            </div>
            <div>
              <input
                type='checkbox'
                name='check1'
                checked={checkList.includes('check1') ? true : false}
                onChange={(e) => handleSingleCheck(e.target.checked, 'check1')}
              />
              <span className='underline'>숙소이용규칙 및 취소/환불규정 동의</span>
              <span className='essential'>(필수)</span>
            </div>
            <div>
              <input
                type='checkbox'
                name='check2'
                checked={checkList.includes('check2') ? true : false}
                onChange={(e) => handleSingleCheck(e.target.checked, 'check2')}
              />
              <span className='underline'>개인정보 수집 및 이용 동의</span>
              <span className='essential'>(필수)</span>
            </div>
            <div>
              <input
                type='checkbox'
                name='check3'
                checked={checkList.includes('check3') ? true : false}
                onChange={(e) => handleSingleCheck(e.target.checked, 'check3')}
              />
              <span className='underline'>개인정보 제 3자 제공 동의</span>
              <span className='essential'>(필수)</span>
            </div>
          </div>
        </div>
      </MainContainerStyle>
    </>
  );
};

export default Main;
