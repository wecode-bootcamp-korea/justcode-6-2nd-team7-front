import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import MyPage from '../MyPage';
import * as A from './My.Styled';
import * as S from '../MyPage.Styled';
import LogoutModal from '../../../component/modal/LogoutModal';
import PhoneTimer from './PhoneTimer';

const My = () => {
  const [nickname, setNickname] = useState(false);
  const [myName, setMyname] = useState(false);
  const [phone, setPhone] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const [phoneNum, setPhoneNum] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleBtnActive = (e) => {
    const { value } = e.target;
    setPhoneNum(e.target.value);
    if (value.length > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 핸드폰번호 post요청후 인증번호 받기
  const handlePhoneBtn = () => {
    phoneNum.length < 10 ? setPhoneCheck(false) : setPhoneCheck(true);

    axios.post('http://localhost:8000/send', { phoneNumber: phoneNum }).then((res) => console.log(res));
  };

  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  // 버튼 toggle
  const handleNickname = () => {
    setNickname((prev) => !prev);
  };

  const handleName = () => {
    setMyname((prev) => !prev);
  };

  const handlePhone = () => {
    setPhone((prev) => !prev);
  };

  axios
    .get('http://localhost:8000/my', {
      headers: { Authorization: localStorage.getItem('token') },
    })
    .then((data) => console.log(data.data));

  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <A.MyContainer>
          <p className='my-header'>내 정보 수정</p>
          <div className='my-img'>
            <img src='https://image.goodchoice.kr/profile/ico/ico_21.png' alt='my-logo' />

            <p>
              <span>KakaoTalk </span>회원으로 로그인
            </p>
          </div>
          <div className='my-nickname-box'>
            <div className='my-nickname'>
              <p>닉네임</p>
              <p className='nickname'>40세한치</p>
            </div>
            {/* toggle 창 */}
            {nickname && (
              <div className='hidden-nickname'>
                <div className='change-nickname'>
                  <input />
                  <button className='nickname-btn'>딴거할래요</button>
                </div>
                <div className='btn-box'>
                  <button className='btn-blue' onClick={handleNickname}>
                    수정완료
                  </button>
                  <button onClick={handleNickname}>수정취소</button>
                </div>
              </div>
            )}

            {!nickname && <button onClick={handleNickname}>수정</button>}
          </div>

          <div className='my-reservation-name'>
            <div className='username'>
              <p className='user'>예약자 이름</p>
              <p className='name'>서지원</p>
            </div>
            {/* toggle 창 */}
            {myName && (
              <div className='hidden-nickname'>
                <div className='change-nickname'>
                  <input />
                </div>
                <div className='btn-box'>
                  <button className='btn-blue' onClick={handleName}>
                    수정완료
                  </button>
                  <button onClick={handleName}>수정취소</button>
                </div>
              </div>
            )}

            {!myName && <button onClick={handleName}>수정</button>}
          </div>
          <div className='my-phone'>
            <div className='my-tel'>
              <p>휴대폰 번호</p>
              <p className='tel'>010****4573</p>
            </div>
            <p className='description'>개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.</p>
            {/* toggle 창 */}
            {phone && (
              <div className='hidden-nickname'>
                <div className='change-nickname'>
                  <div>
                    <div className='phone-num'>
                      <input type='tel' maxLength='13' value={phoneNum} onChange={handleBtnActive} />
                      <button className={isActive ? 'button' : 'disabled'} onClick={handlePhoneBtn}>
                        인증번호 전송
                      </button>
                    </div>
                  </div>
                </div>
                {phoneCheck && <PhoneTimer />}
                <div className='btn-box'>
                  <button className='btn-blue' onClick={handlePhone}>
                    수정완료
                  </button>
                  <button onClick={handlePhone}>수정취소</button>
                </div>
              </div>
            )}

            {!phone && <button onClick={handlePhone}>수정</button>}
          </div>
          <div className='container'></div>
          <div className='my-logout'>
            <p>여기어때를 이용하고 싶지 않으신가요? </p>
            <Link
              onClick={() => {
                setModal(true);
              }}>
              로그아웃
            </Link>
            {/* 로그아웃 모달 창 */}
            {modal && <LogoutModal setModal={setModal} />}
            <Link to='/login'>회원탈퇴</Link>
          </div>
        </A.MyContainer>
      </S.MyPageContainer>
    </S.Header>
  );
};

export default My;
