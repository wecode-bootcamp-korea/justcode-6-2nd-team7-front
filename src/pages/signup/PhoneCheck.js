import React, { useState } from 'react';
import CertificationNum from './CertificationNum';
import * as S from './PhoneCheck.Styled';

function PhoneCheck() {
  const [phoneCheck, setPhoneCheck] = useState(false);

  return (
    <S.PhoneContainer>
      <p className='title'>휴대폰 본인 확인</p>
      <p className='subTitle'>원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요.</p>
      <CertificationNum title={'휴대폰 번호'} btnTitle={'인증번호 전송'} />
      {
        phoneCheck && <CertificationNum title={'인증번호'} btnTitle={'확인'} />
        // <div className='phone-container'>
        //   <p>인증번호</p>
        //   <div className='phone-num'>
        //     <input type='tel' maxLength='4' />
        //     <button className={isActive ? 'button' : 'disabled'}>확인</button>
        //   </div>
        // </div>
      }
    </S.PhoneContainer>
  );
}

export default PhoneCheck;
