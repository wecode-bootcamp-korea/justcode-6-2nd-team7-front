import React from 'react';

function KaKaoLogin() {
  // GET /oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code HTTP/1.1
  // Host: kauth.kakao.com

  const REST_API_KEY = '	5896c4071585205226ff70774816a5df';
  const REDIRECT_URI = 'http://localhost:3000/kakao-login';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKaKaoLogin = (e) => {
    e.preventDefault();
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <div>
      <button onClick={handleKaKaoLogin}>카카오</button>
    </div>
  );
}

export default KaKaoLogin;
