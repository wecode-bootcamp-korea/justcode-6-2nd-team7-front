import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KaKaoLogin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const REDIRECT_URI = 'http://localhost:3000/kakao-login';

  const getKaKaoToken = () => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        fetch('http://localhost:8000/kakao', {
          method: 'POST',
          headers: { Authorization: JSON.stringify(data.access_token) },
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('token', data.token);
            navigate('/');
          });
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKaKaoToken();
  }, []);

  return <button>카카오</button>;
};

export default KaKaoLogin;
