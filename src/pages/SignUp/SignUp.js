import React from 'react';

function SignUp() {
  return (
    <S.SignUpForm>
      <div className='signup-container'>
        <div className='signup-header'>
          <strong>저기어때 약관 동의</strong>
        </div>
        <p>
          <label>
            <input type='checkbox' />
            <span>전체동의</span>
          </label>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'>이용약관 동의</span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'>만 14세 이상 확인 </span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'>개인정보 수집 및 이용 동의</span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'>개인정보 수집 및 이용 동의</span>
          <span>(선택)</span>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'>마케팅 알림 수신동의</span>
          <span>(선택)</span>
        </p>
        <p>
          <input type='checkbox' />
          <span className='underline'> 위치기반 서비스 이용약관 동의</span>
          <span>(선택)</span>
        </p>
      </div>
      <div className='next-button'>
        <button>다음</button>
      </div>
    </S.SignUpForm>
  );
}

export default SignUp;
