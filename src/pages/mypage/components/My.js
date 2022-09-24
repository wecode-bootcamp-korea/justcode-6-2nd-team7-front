import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyPage from '../MyPage';
import LogoutModal from '../../../component/modal/LogoutModal';
import * as A from './My.Styled';
import * as S from '../MyPage.Styled';

const My = () => {
  const [nickname, setNickname] = useState(false);
  const [myName, setMyname] = useState(false);
  const [phone, setPhone] = useState(false);
  const [modal, setModal] = useState(false);

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
            <p>예약자 이름</p>
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
                  <input />
                  <button className='nickname-btn'>인증번호</button>
                </div>
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
            {modal && <LogoutModal />}
            <Link to='/login'>회원탈퇴</Link>
          </div>
        </A.MyContainer>
      </S.MyPageContainer>
    </S.Header>
  );
};

export default My;
