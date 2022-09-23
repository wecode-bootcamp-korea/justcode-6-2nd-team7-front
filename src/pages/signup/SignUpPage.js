import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './SignUpPage.Styled';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [userNic, setUserNic] = useState('');

  const [isValid, setIsValid] = useState(false);
  // 이메일 비밀번호 문구
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwTest, setPwTest] = useState('');

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (!email.includes('@')) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  const handlePwInput = (e) => {
    setPassword(e.target.value);
    if (password.length < 5) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
  };

  const handlePwCheckInput = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => {
    if (password === passwordCheck) {
      setPwTest('');
    } else {
      setPwTest('일치하지 않습니다.');
    }
  }, [passwordCheck]);

  const handleBtn = () => {
    if (email.includes('@') && password.length > 5 && password === passwordCheck) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  // 사용자가 입력한 닉네임
  const handleNickname = (e) => {
    setUserNic(e.target.value);
  };

  const handleSuccess = (e) => {
    e.preventDefault();
    if (isValid) {
      axios
        .post('http://localhost:8000/signup', {
          email: email,
          password: password,
          nickName: userNic,
        })
        .then((res) => console.log(res));
    }
  };

  return (
    <S.SignUpContainer>
      <div className='signup-img'>
        <img src='/images/logoBlue.svg' alt='logo' />
      </div>
      <form>
        <p className='signup'>회원가입</p>
        <div className='input-container'>
          <label htmlFor='name'>이메일 아이디</label>
          <input
            autoComplete='off'
            value={email}
            name='email'
            placeholder='이메일 주소를 입력해주세요.'
            onChange={handleEmailInput}
            onKeyUp={handleBtn}
          />
          {emailCheck && <p className='check'>이메일 주소를 확인해주세요.</p>}
        </div>
        <div className='input-container'>
          <label>비밀번호</label>
          <input
            value={password}
            name='password'
            type='password'
            onChange={handlePwInput}
            placeholder='비밀번호를 입력해주세요.'
            onKeyUp={handleBtn}
          />
          {pwCheck && <p className='check'>사용불가 : 최소 6자 이상 입력해주세요.</p>}
        </div>
        <div className='input-container'>
          <label>비밀번호 확인</label>
          <input
            value={passwordCheck}
            onChange={handlePwCheckInput}
            name='passwordCheck'
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            onKeyUp={handleBtn}
          />
          <p className='check'>{pwTest}</p>
        </div>
        <div className='input-container'>
          <label>닉네임</label>
          <div>
            <input value={userNic} className='nickname' onChange={handleNickname} />
            <button type='button' className='nickname-btn'>
              딴거할래요
            </button>
          </div>
        </div>
        <button type='submit' className={isValid ? 'active' : ''} onClick={handleSuccess}>
          가입하기
        </button>
      </form>
    </S.SignUpContainer>
  );
}

export default SignUpPage;
