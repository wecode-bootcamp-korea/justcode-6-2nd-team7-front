import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as S from './PhoneCheck.Styled';
import Timer from './Timer';

function PhoneCheck() {
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [phoneNum, setPhoneNum] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleBtnActive = (e) => {
    const { value } = e.target;
    setPhoneNum(e.target.value);
    if (value.length > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 핸드폰번호 post요청후 인증번호 받기
  const handlePhoneBtn = () => {
    phoneNum.length < 10 ? setPhoneCheck(false) : setPhoneCheck(true);

    axios.post('http://localhost:8000/send', { phoneNumber: phoneNum }).then((res) => console.log(res));
  };

  return (
    <S.PhoneContainer>
      <p className='title'>휴대폰 본인 확인</p>
      <p className='subTitle'>원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요.</p>
      <S.PhoneBox>
        <p>휴대폰 번호</p>
        <div className='phone-num'>
          <input type='tel' maxLength='13' value={phoneNum} onChange={handleBtnActive} />
          <button className={isActive ? 'button' : 'disabled'} onClick={handlePhoneBtn}>
            인증번호 전송
          </button>
        </div>
      </S.PhoneBox>
      {phoneCheck && <Timer phoneNum={phoneNum} isActive={isActive} />}
    </S.PhoneContainer>
  );
}

export default PhoneCheck;
