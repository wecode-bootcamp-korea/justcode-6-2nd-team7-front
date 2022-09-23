import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './SignUpPage.Styled';
import { useRecoilValue } from 'recoil';
import { phoneCheckState } from '../../atom';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [userNic, setUserNic] = useState('');

  // recoil사용
  const phoneNum = useRecoilValue(phoneCheckState);

<<<<<<< HEAD
=======
  // 버튼 색상 변경
>>>>>>> main
  const [isValid, setIsValid] = useState(false);
  // 이메일 비밀번호 문구
  const [emailCheck, setEmailCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [pwTest, setPwTest] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
<<<<<<< HEAD
    if (!email.includes('@')) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
=======
    !email.includes('@') ? setEmailCheck(true) : setEmailCheck(false);
>>>>>>> main
  };

  const handlePwInput = (e) => {
    setPassword(e.target.value);
<<<<<<< HEAD
    if (password.length < 10) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
=======

    password.length < 10 ? setPwCheck(true) : setPwCheck(false);
>>>>>>> main
  };

  const handlePwCheckInput = (e) => {
    setPasswordCheck(e.target.value);
  };

  useEffect(() => {
<<<<<<< HEAD
    if (password === passwordCheck) {
      setPwTest('');
    } else {
      setPwTest('일치하지 않습니다.');
    }
  }, [passwordCheck]);

  const handleBtn = () => {
    if (email.includes('@') && password.length > 10 && password === passwordCheck) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
=======
    password === passwordCheck ? setPwTest('') : setPwTest('일치하지 않습니다.');
  }, [passwordCheck]);

  // 버튼색상변경
  const handleBtn = () => {
    email.includes('@') && password.length > 10 && password === passwordCheck ? setIsValid(true) : setIsValid(false);
>>>>>>> main
  };

  // 사용자가 입력한 닉네임
  const handleNickname = (e) => {
    setUserNic(e.target.value);
  };

  // 회원가입 통신
  const handleSuccess = (e) => {
    e.preventDefault();

    if (isValid) {
      const body = {
        email: email,
        password: password,
        nickName: userNic,
        phoneNumber: phoneNum,
      };
<<<<<<< HEAD
      console.log(body);
=======

>>>>>>> main
      axios.post('http://localhost:8000/signup', body).then((res) => {
        if (res.data.message === 'SIGNUP_SUCCESS!') {
          navigate('/login');
        } else {
          setErrorMessage('회원가입에 실패 하였습니다.');
        }
      });
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
<<<<<<< HEAD
            onChange={handlePwInput}
            placeholder='비밀번호를 입력해주세요.'
=======
            placeholder='비밀번호를 입력해주세요.'
            onChange={handlePwInput}
>>>>>>> main
            onKeyUp={handleBtn}
          />
          {pwCheck && <p className='check'>사용불가 : 최소 10자 이상 입력해주세요.</p>}
        </div>
        <div className='input-container'>
          <label>비밀번호 확인</label>
          <input
            value={passwordCheck}
<<<<<<< HEAD
            onChange={handlePwCheckInput}
            name='passwordCheck'
            type='password'
            placeholder='비밀번호를 입력해주세요.'
=======
            name='passwordCheck'
            type='password'
            placeholder='비밀번호를 입력해주세요.'
            onChange={handlePwCheckInput}
>>>>>>> main
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
        <button className={isValid ? 'active' : ''} onClick={handleSuccess}>
          가입하기
        </button>
        <p className='signup-error'>{errorMessage}</p>
      </form>
    </S.SignUpContainer>
  );
}

export default SignUpPage;
