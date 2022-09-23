import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './PhoneCheck.Styled';

function Timer({ isActive, phoneNum }) {
  const [num, setNum] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // timer
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const handlePhoneCheck = (e) => {
    setNum(e.target.value);
  };

  // 인증번호 확인로직
  const handleNextBtn = () => {
    axios
      .post('http://localhost:8000/validation', {
        phoneNumber: phoneNum,
        verifyCode: num,
      })
      .then((res) => {
        if (res.data.message === 'SMS_VERIFY_SUCCESS') {
          navigate('/signup-page');
        }
      })
      .catch((err) => setErrorMessage('일치하지 않습니다.'));
  };

  return (
    <S.PhoneBox>
      <p>인증번호</p>
      <div className='phone-num'>
        <input type='tel' maxLength='6' value={num} onChange={handlePhoneCheck} />
        <p className='timer'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button className={isActive ? 'button' : 'disabled'} onClick={handleNextBtn}>
          확인
        </button>
        <p className='phone-error'>{errorMessage}</p>
      </div>
    </S.PhoneBox>
  );
}

export default Timer;
