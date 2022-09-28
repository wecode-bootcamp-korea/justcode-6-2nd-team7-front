import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

  .reserv-container {
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

    .complete-msg {
      line-height: 25px;
      padding: 35px 30px 25px;
    }

    .reserv-btn {
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
        display: none;
      }
      .submit {
        color: ${({ theme }) => theme.colors.mainColor};
      }
      .block {
        display: block;
      }
    }
  }
`;

const SubmitModal = ({ setReservModal, modalMsg }) => {
  const [submit, setSubmit] = useState(false);
  const [completeMsg, setCompleteMsg] = useState(false);

  useEffect(() => {
    if (modalMsg === '결제하시겠습니까?') {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [modalMsg]);

  const handleModal = () => {
    setReservModal(false);
  };

  const handlePayBtn = () => {
    setSubmit(false);
    setCompleteMsg(true);
  };

  return (
    <ModalContainer>
      <div className='bg' onClick={handleModal}></div>
      <div className='reserv-container'>
        {!completeMsg ? (
          <p>{modalMsg}</p>
        ) : (
          <p className='complete-msg'>
            결제가 완료되었습니다.
            <br />
            마이페이지에서 예약내역을 확인하세요.
          </p>
        )}
        <div className='reserv-btn'>
          <button
            className={`cancel ${submit && 'block'}`}
            onClick={() => {
              setReservModal(false);
            }}>
            취소
          </button>
          {!submit && !completeMsg && (
            <button
              className='submit'
              onClick={() => {
                handleModal();
              }}>
              확인
            </button>
            // 결제 불가능할때
          )}
          {submit && (
            <button className='submit' onClick={handlePayBtn}>
              결제하기
            </button>
          )}
          {/* 결제가능할 때 */}
          {completeMsg && (
            <button className='submit' onClick={handleModal}>
              확인
            </button>
            // 결제 후 확인버튼
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default SubmitModal;
