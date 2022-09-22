import React from 'react';
import * as S from './SignUpPage.Styled';

function SignUpPage() {
  return (
    <S.SignUpContainer>
      <div className='signup-img'>
        <img src='/images/logoBlue.svg' alt='logo' />
      </div>
      <form>
        <p className='signup'>회원가입</p>
        <div className='input-container'>
          <p>이메일 아이디</p>
          <input placeholder='이메일 주소를 입력해주세요.' />
        </div>
        <div className='input-container'>
          <p>비밀번호</p>
          <input type='password' placeholder='비밀번호를 입력해주세요.' />
        </div>
        <div className='input-container'>
          <p>비밀번호 확인</p>
          <input type='password' placeholder='비밀번호를 입력해주세요.' />
        </div>
        <div className='input-container'>
          <p>닉네임</p>
          <div>
            <input className='nickname' />
            <button className='nickname-btn'>딴거할래요</button>
          </div>
        </div>
        <button>가입하기</button>
      </form>
    </S.SignUpContainer>
  );
}

export default SignUpPage;
