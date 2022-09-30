import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  .modal-container {
    width: 368px;
    height: fit-content;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .close-btn {
    float: right;
    width: 30px;
    height: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .first {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
    font-size: 18px;
  }
  .sub-subject {
    color: #ffffff;
    margin-top: 15px;
    padding: 15px;
  }
  .content {
    padding: 10px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
  }
`;

const UseModal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Modal>
      <div className='modal-container'>
        <button className='close-btn' onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} size='lg' />{' '}
        </button>
        <div>
          <div>
            <div>
              <strong className='first'>객실 이용안내</strong>
            </div>
            <div className='sub-subject'>기본정보</div>
            <div className='content'>
              <strong>기본정보</strong>
              <p>2인 기준 최대 2인</p>
              <p> 더블베드 1개</p>
            </div>
            <div className='content'>
              <strong>추가정보</strong>
              <p>21시까지 체크인</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UseModal;
