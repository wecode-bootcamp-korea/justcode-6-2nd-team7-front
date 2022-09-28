import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { logoutModalState } from '../../atom';

const ModalContainer = styled.div`
  .bg {
    display: 'flex';
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.modalBg};
    color: ${({ theme }) => theme.colors.text};
    z-index: 99;
  }

  .logout-container {
    position: fixed;
    top: 38%;
    left: 40%;
    width: 360px;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
    z-index: 100;

    p {
      width: 100%;
      padding: 50px 30px 40px;
      border-bottom: 1px solid #b8b8b8;
      font-size: 16px;
      color: #000000de;
    }

    .logout-btn {
      display: flex;
      justify-content: end;
      padding: 0px 15px;
      button {
        width: 70px;
        height: 48px;
        border: none;
        outline: none;
        background-color: #fff;
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
      }
      .cancel {
        color: ${({ theme }) => theme.colors.text};
      }
      .logout {
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }
  }
`;

function LogoutModal() {
  const [, setModal] = useRecoilState(logoutModalState);
  const navigate = useNavigate();

  const clickBg = () => {
    setModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    setModal(false);
  };

  return (
    <ModalContainer>
      <div className='bg' onClick={clickBg}></div>
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
