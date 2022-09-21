import React, { useState } from 'react';

import * as S from './PhoneCheck.Styled';

function PhoneCheck() {
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [num, setNum] = useState('');

  // 4자리 랜덤숫자
  const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  const [isActive, setIsActive] = useState(false);

  const handleBtnActive = (e) => {
    const { value } = e.target;
    if (value.length > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const handleCheck = (e) => {
    if (isActive) {
      setPhoneCheck(true);

      alert(randomNum);
    }
  };

  const checkNum = (e) => {
    console.log(e.target.value);
    console.log(randomNum);
    setNum(e.target.value);
  };

  const checkBtnNum = () => {
    console.log(randomNum);
  };

  return (
    <S.PhoneContainer>
      <p className='title'>휴대폰 본인 확인</p>
      <p className='subTitle'>원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요.</p>
      <div className='phone-container'>
        <p>휴대폰 번호</p>
        <div className='phone-num'>
          <input type='tel' maxLength='13' onChange={handleBtnActive} />
          <button className={isActive ? 'button' : 'disabled'} onClick={handleCheck}>
            인증번호 전송
          </button>
        </div>
      </div>
      {phoneCheck && (
        <div className='phone-container'>
          <p>인증번호</p>
          <div className='phone-num'>
            <input type='tel' maxLength='4' value={num} onChange={checkNum} />
            <button className={isActive ? 'button' : 'disabled'}>확인</button>
          </div>
        </div>
      )}
    </S.PhoneContainer>
  );
}

export default PhoneCheck;
