import styled from 'styled-components';

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

const ModalContainer = styled.div`
  .bg {
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100vw;
    background-color: #0000007a;
    color: ${({ theme }) => theme.colors.text};
    z-index: 99;
  }

  .container {
    position: fixed;
    top: 38%;
    left: 40%;
    width: 360px;
    margin: auto;
    padding-bottom: 25px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 100;

    p {
      width: 100%;
      padding: 20px 30px 12px;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text};
      line-height: 27px;
    }

    .btn {
      display: flex;
      button {
        width: 300px;
        height: 48px;
        margin: auto;
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: ${({ theme }) => theme.colors.mainColor};
        font-weight: 700;
        font-size: 15px;
        cursor: pointer;
      }
    }
  }
`;

export default EmptyInputModal;
