import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KaKaoLogin = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const KAKAO_CODE = location.search.split('=')[1];

  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const REST_API_KEY = '5896c4071585205226ff70774816a5df';

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
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              navigate('/');
            }
          });
      });
  };

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
