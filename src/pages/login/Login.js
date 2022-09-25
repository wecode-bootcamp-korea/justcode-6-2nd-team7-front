import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import KaKaoLogin from './KaKaoLogin';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import * as S from './Login.Styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);

    !email.includes('@') ? setEmailCheck(true) : setEmailCheck(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const REST_API_KEY = '5896c4071585205226ff70774816a5df';
  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const handleKakao = (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };

  // 에러문구 2초뒤 사라짐
  const Error = useCallback(() => {
    setErrorMessage('아이디,비밀번호가 일치하지 않습니다.');
    let timer = setTimeout(() => {
      setErrorMessage('');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // 로그인 통신 토큰 localstorage에 저장
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/login', { email, password })
      .then((res) => {
        if (res.data.message === 'LOGIN_SUCCESS!') {
          localStorage.setItem('token', res.data.token);
          navigate('/');
        }
      })
      .catch((err) => Error());
  };

  return (
    <S.LoginForm>
      <div className='login-img'>
        <img src='/images/logoBlue.svg' alt='logo' />
      </div>
      <div className='login-btn'>
        <button className='kakao' onClick={handleKakao}>
          <FontAwesomeIcon className='icon' icon={faComment} />
          <p className='letter'>카카오톡으로 로그인</p>
        </button>
        <button className='facebook'>
          <FontAwesomeIcon className='icon' icon={faFacebook} />
          <p className='letter'>Facebook으로 로그인</p>
        </button>
        <button className='naver'>
          <span className='icon'>N</span>
          <p className='letter'>네이버로 로그인</p>
        </button>
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
          <p className='error-message'>{errorMessage}</p>
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
