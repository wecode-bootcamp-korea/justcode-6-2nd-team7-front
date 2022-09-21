import React from 'react';
import styled from 'styled-components';

const KaKaoLogin = () => {
  const KaKaoLogin = styled.div`
    button {
      width: 100%;
      height: 50px;
      margin-top: 3%;
      background: rgb(252, 229, 30);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  const REST_API_KEY = '	5896c4071585205226ff70774816a5df';
  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKaKaoLogin = (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <KaKaoLogin>
      <button onClick={handleKaKaoLogin}>카카오</button>
    </KaKaoLogin>
  );
};

export default KaKaoLogin;
