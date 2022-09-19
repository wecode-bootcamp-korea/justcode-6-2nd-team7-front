import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Login.Styled';

function Login() {
  return (
    <S.LoginForm>
      <strong>여기어때</strong>
      <S.LoginInput>
        <S.LineContainere>
          <span>또는</span>
        </S.LineContainere>
        <S.InputContainer>
          <S.EmailInput>
            <input placeholder='이메일주소' />
          </S.EmailInput>

          <S.PasswordInput>
            <input placeholder='비밀번호' />
          </S.PasswordInput>

          <button>로그인</button>
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
