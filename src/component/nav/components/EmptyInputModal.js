import styled from 'styled-components';

const ModalContainer = styled.div`
  .bg {
    display: 'flex';
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    background-color: #000000c7;
    color: ${({ theme }) => theme.colors.text};
    z-index: 99;
  }

  .container {
    position: fixed;
    top: 38%;
    left: 40%;
    width: 360px;
    margin: auto;
    padding-bottom: 30px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 100;

    p {
      width: 100%;
      padding: 40px 30px 30px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text};
      line-height: 30px;
    }

    button {
      width: 290px;
      height: 56px;
      margin-left: 36px;
      border: none;
      border-radius: 5px;
      outline: none;
      background-color: ${({ theme }) => theme.colors.mainColor};
      font-weight: 700;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

function EmptyInputModal({ setEmptySubmit }) {
  const handleClose = (e) => {
    setEmptySubmit(false);
  };

  return (
    <ModalContainer>
      <div className='bg' onClick={handleClose}></div>
      <div className='container'>
        <p>
          검색어가 없습니다.
          <br />
          검색어를 입력하세요.
        </p>
        <div className='btn'>
          <button
            className='close'
            onClick={() => {
              setEmptySubmit(false);
            }}>
            확인
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

export default EmptyInputModal;
