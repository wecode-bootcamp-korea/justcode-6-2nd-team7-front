import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyPage from '../MyPage';
import styled from 'styled-components';
import * as S from '../MyPage.Styled';

const MyContainer = styled.div`
  margin-top: 140px;
  width: 600px;

  button {
    width: 144px;
    height: 40px;
    border: solid 1px #ccc;
    background: #fff;
    font-size: 15px;
    border-radius: 5px;
    margin-top: 5px;
  }

  .my-header {
    padding: 0 0 43px 0;
    font-size: 18px;
    font-weight: bold;
  }

  .my-img {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 42px;

    img {
      width: 128px;
      height: 128px;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.32);
    }
  }

  .my-nickname-box {
    margin-bottom: 50px;
    .my-nickname {
      display: flex;

      p {
        font-size: 18px;
        padding-right: 80px;
      }

      .nickname {
        color: rgb(93, 93, 93);
      }
    }
  }

  .my-reservation-name {
    margin-bottom: 50px;

    p {
      font-size: 18px;
    }
  }

  .my-phone {
    margin-bottom: 50px;

    .my-tel {
      display: flex;
      margin-bottom: 7px;

      p {
        padding-right: 50px;
        font-size: 18px;
      }
      .tel {
        color: rgb(93, 93, 93);
      }
    }

    .description {
      margin-bottom: 6px;
      font-size: 14px;
      color: rgb(93, 93, 93);
    }
  }

  .container {
    height: 50px;
    border: 1px solid lightgray;
    border-left: none;
    border-right: none;
  }

  .my-logout {
    display: flex;
    margin-top: 30px;

    p {
      margin-right: 50px;
      color: rgb(93, 93, 93);
    }

    a {
      margin-right: 20px;
      color: #000;
      text-decoration: underline;
    }
  }
  /* toggle scss */
  .hidden-nickname {
    margin: 10px 0;
    input {
      width: 374px;
      height: 45px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 5px;
    }

    .nickname-btn {
      background-color: #000;
      margin: 0;
      width: 100px;
      height: 45px;
      border: none;
      background-color: ${({ theme }) => theme.colors.mainColor};
      color: white;
    }

    .change-nickname {
      display: flex;

      input {
        margin-right: 7px;
      }
    }

    button {
      margin-top: 20px;
      margin-right: 15px;
    }

    .btn-box {
      /* margin-left: 12px; */
    }
  }

  .btn-blue {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
  }
`;

function My() {
  const [nickname, setNickname] = useState(false);
  const [myName, setMyname] = useState(false);
  const [phone, setPhone] = useState(false);

  // 버튼 toggle
  const handleNickname = () => {
    setNickname((prev) => !prev);
  };

  const handleCancel = () => {
    setNickname((prev) => !prev);
  };

  const handleComplete = () => {
    setNickname((prev) => !prev);
  };

  const handleNameCancel = () => {
    setMyname((prev) => !prev);
  };

  const handleName = () => {
    setMyname((prev) => !prev);
  };

  const handleNameComplete = () => {
    setMyname((prev) => !prev);
  };

  const handlePhone = () => {
    setPhone((prev) => !prev);
  };
  const handlePhoneCancel = () => {
    setPhone((prev) => !prev);
  };
  const handlePhoneComplete = () => {
    setPhone((prev) => !prev);
  };

  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <MyContainer>
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
                  <button className='btn-blue' onClick={handleComplete}>
                    수정완료
                  </button>
                  <button onClick={handleCancel}>수정취소</button>
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
                  <button className='btn-blue' onClick={handleNameComplete}>
                    수정완료
                  </button>
                  <button onClick={handleNameCancel}>수정취소</button>
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
                  <button className='btn-blue' onClick={handlePhoneComplete}>
                    수정완료
                  </button>
                  <button onClick={handlePhoneCancel}>수정취소</button>
                </div>
              </div>
            )}

            {!phone && <button onClick={handlePhone}>수정</button>}
          </div>
          <div className='container'></div>
          <div className='my-logout'>
            <p>여기어때를 이용하고 싶지 않으신가요? </p>
            <Link to='/login'>로그아웃</Link>
            <Link to='/login'>회원탈퇴</Link>
          </div>
        </MyContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default My;
