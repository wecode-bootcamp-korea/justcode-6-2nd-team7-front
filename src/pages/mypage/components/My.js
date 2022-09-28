import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyPage from '../MyPage';
import PhoneTimer from './PhoneTimer';
import * as A from './My.Styled';
import * as S from '../MyPage.Styled';
import { useRecoilState } from 'recoil';
import { phoneCheckState, logoutModalState } from '../../../atom';

const My = () => {
  const [, setModal] = useRecoilState(logoutModalState);
  const [phoneNum, setPhoneNum] = useRecoilState(phoneCheckState);
  const [nickname, setNickname] = useState(false);
  const [myName, setMyname] = useState(false);
  const [phone, setPhone] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [information, setInformation] = useState([]);
  const [changeNickname, setChangeNickname] = useState('');
  const [userName, setUserName] = useState('');

  const handleBtnActive = (e) => {
    const { value } = e.target;
    setPhoneNum(value);
    value.length > 10 ? setIsActive(true) : setIsActive(false);
  };

  // 핸드폰번호 post요청후 인증번호 받기
  const handlePhoneBtn = () => {
    phoneNum.length < 10 ? setPhoneCheck(false) : setPhoneCheck(true);

    axios.post('http://localhost:8000/send', { phoneNumber: phoneNum });
  };

  // 버튼 toggle
  const handleNickname = () => {
    setNickname((prev) => !prev);

    axios
      .patch(
        'http://localhost:8000/my/nickName',
        { nickName: changeNickname },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      )
      .then(() => setChangeNickname(''));
  };

  const handleName = () => {
    setMyname((prev) => !prev);
    axios
      .patch(
        'http://localhost:8000/my/name',
        { name: userName },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      )
      .then(() => setUserName(''));
  };

  const handlePhone = () => {
    setPhone((prev) => !prev);
    axios
      .patch(
        'http://localhost:8000/my/phoneNumber',
        { phoneNumber: phoneNum },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      )
      .then((res) => {
        setInformation(res.data.data);
      });
  };

  // 유저정보 get
  useEffect(() => {
    axios
      .get('http://localhost:8000/my', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((data) => setInformation(data.data.data[0]));
  }, [changeNickname, userName, information.userPhoneNumber]);

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
            <img src='images/smile_icon.png' alt='my-logo' />

            <p>
              <span>{information.userEmail} </span>회원으로 로그인
            </p>
          </div>
          <div className='my-nickname-box'>
            <div className='my-nickname'>
              <p>닉네임</p>
              <p className='nickname'>{information.userNickName}</p>
            </div>
            {/* toggle 창 */}
            {nickname && (
              <div className='hidden-nickname'>
                <div className='change-nickname'>
                  <input
                    value={changeNickname}
                    onChange={(e) => {
                      setChangeNickname(e.target.value);
                    }}
                  />
                </div>
                <div className='btn-box'>
                  <button className='btn-blue' onClick={handleNickname}>
                    수정완료
                  </button>
                  <button
                    onClick={() => {
                      setNickname((prev) => !prev);
                    }}>
                    수정취소
                  </button>
                </div>
              </div>
            )}

            {!nickname && <button onClick={() => setNickname((prev) => !prev)}>수정</button>}
          </div>

          <div className='my-reservation-name'>
            <div className='username'>
              <p className='user'>예약자 이름</p>
              <p className='name'>{information.userName && information.userName.replace(/(?<=.{1})./, '*')}</p>
            </div>
            {/* toggle 창 */}
            {myName && (
              <div className='hidden-nickname'>
                <div className='change-nickname'>
                  <input
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div className='btn-box'>
                  <button className='btn-blue' onClick={handleName}>
                    수정완료
                  </button>
                  <button
                    onClick={() => {
                      setMyname((prev) => !prev);
                    }}>
                    수정취소
                  </button>
                </div>
              </div>
            )}

            {!myName && <button onClick={() => setMyname((prev) => !prev)}>수정</button>}
          </div>
          <div className='my-phone'>
            <div className='my-tel'>
              <p>휴대폰 번호</p>
              <p className='tel'>
                {information.userPhoneNumber && information.userPhoneNumber.replace(/\d(?=\d{4})/g, '*')}
              </p>
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
            <Link to='/login'>회원탈퇴</Link>
          </div>
        </A.MyContainer>
      </S.MyPageContainer>
    </S.Header>
  );
};

export default My;
