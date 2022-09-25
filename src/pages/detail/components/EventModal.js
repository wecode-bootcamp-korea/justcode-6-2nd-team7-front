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
  z-index: 9999;
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
    font-size: 18px;
    padding-top: 50px;
  }
  .sub-subject {
    background-color: #009abd;
    color: #ffffff;
    margin-top: 15px;
    padding: 15px;
  }
  .content {
    border: 1px solid #009abd;
    padding: 5px;
  }
`;

const EventModal = ({ onClose }) => {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Modal>
      <div className='modal-container'>
        <button className='close-btn' onClick={handleClose}>
          {' '}
          <FontAwesomeIcon icon={faXmark} size='lg' />{' '}
        </button>
        <div>
          <div>
            <div>
              <strong className='first'>진행중인이벤트</strong>
            </div>
            <div className='sub-subject'>병따개이벤트</div>
            <div className='content'>
              <p>당일 12:00~21:00중 최대 9시간 이용가능</p>
              <p>(숙박불가/ 객실 9시간 이용권)</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
