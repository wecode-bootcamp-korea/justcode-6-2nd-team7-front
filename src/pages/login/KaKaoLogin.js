import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const KaKaoLogin = () => {
  const KaKaoLogin = styled.div`
    button {
      width: 100%;
      height: 100px;
      margin-top: 3%;
      background: rgb(252, 229, 30);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  const navigate = useNavigate();

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const REST_API_KEY = '5896c4071585205226ff70774816a5df';
  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const getKaKaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        fetch('http://localhost:8000/kakao', {
          method: 'POST',
          headers: { Authorization: JSON.stringify(data.access_token) },
        }).then((res) => console.log(res));

        // if (data.access_token) {
        //   localStorage.setItem('kakaoToken', data.access_token);
        // }
      });
  };

  console.log(localStorage.getItem('kakaoToken'));

  useEffect(() => {
    if (!location.search) return;
    getKaKaoToken();
  }, []);

  return (
    <KaKaoLogin>
      <button>카카오</button>
    </KaKaoLogin>
  );
};

export default KaKaoLogin;
