import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { logoutModalState } from '../../atom';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000c7;
  z-index: 999;

  .logout-container {
    width: 360px;
    height: 170px;
    background-color: #fff;
    border-radius: 8px;

    p {
      width: 100%;
      padding: 50px 20px;
      border-bottom: 1px solid #b8b8b8;
      font-size: 16px;
      color: #000000de;
    }

    .logout-btn {
      display: flex;
      justify-content: end;
      padding: 0 15px;
      button {
        width: 70px;
        border: none;
        outline: none;
        background-color: #fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
      }
      .cancel {
        color: #5d5d5d;
      }
      .logout {
        color: #0e7562;
      }
    }
  }
`;

function LogoutModal() {
  const [, setModal] = useRecoilState(logoutModalState);
  const outline = useRef();
  const navigate = useNavigate();

  // 바깥영역 클릭 했을때 모달창 닫힘
  const handleClose = (e) => {
    if (outline.current === e.target) {
      setModal(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <ModalContainer ref={outline} onClick={handleClose}>
      <div className='logout-container'>
        <p>로그아웃 하시겠습니까?</p>
        <div className='logout-btn'>
          <button
            className='cancel'
            onClick={() => {
              setModal(false);
            }}>
            취소
          </button>
          <button className='logout' onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default LogoutModal;
