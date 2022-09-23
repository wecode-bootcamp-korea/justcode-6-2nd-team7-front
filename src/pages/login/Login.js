import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import KaKaoLogin from './KaKaoLogin';

import * as S from './Login.Styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);

    !email.includes('@') ? setEmailCheck(true) : setEmailCheck(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const REST_API_KEY = '5896c4071585205226ff70774816a5df';
  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleKakao = (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', { email, password }).then((res) => {
      if (res.data.message === 'LOGIN_SUCCESS!') {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      }
    });
  };

  return (
    <S.LoginForm>
      <div className='login-img'>
        <img src='/images/logoBlue.svg' alt='logo' />
      </div>
      <div className='login-btn'>
        <button className='kakao' onClick={handleKakao}>
          카카오로 로그인
        </button>
        <button className='facebook'>Facebook으로 로그인</button>
        <button className='naver'>네이버로 로그인</button>
      </div>
      <S.LoginInput>
        <S.LineContainer>
          <span>또는</span>
        </S.LineContainer>
        <S.InputContainer>
          <S.EmailInput>
            <input value={email} placeholder='이메일주소' onChange={handleEmail} />
          </S.EmailInput>
          {emailCheck && <p className='email-check'>이메일 주소를 확인해주세요.</p>}
          <S.PasswordInput>
            <input value={password} type='password' placeholder='비밀번호' onChange={handlePassword} />
          </S.PasswordInput>

          <button onClick={handleLogin}>로그인</button>
        </S.InputContainer>
        <S.LoginFooter>
          <Link>비밀번호 재설정</Link>
          <Link to={'/signup'}>회원가입</Link>
        </S.LoginFooter>
      </S.LoginInput>
    </S.LoginForm>
  );
}

export default Login;
