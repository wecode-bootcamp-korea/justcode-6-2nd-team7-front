import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 100px;

  .signup-img {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 100px;
      height: 80px;
    }
  }

  form {
    .signup {
      margin-bottom: 5%;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      margin-left: 3%;
      margin-bottom: 7%;
      label {
        margin-bottom: 3%;
        color: rgba(0, 0, 0, 0.56);
        font-size: 16px;
        font-weight: bold;
      }

      input {
        width: 90%;
        height: 40px;
        padding: 0 10px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        font-size: 18px;
      }

      .check {
        font-size: 13px;
        color: #ff0000;
      }

      .nickname {
        width: 60%;
        margin-right: 3%;
      }

      .nickname-btn {
        width: 27%;
        height: 43px;
        border-radius: 6px;
        border: none;
        background: #ebebeb;
        color: rgba(0, 0, 0, 0.56);
        font-size: 14px;
        font-weight: bold;
      }
    }

    button {
      width: 95%;
      height: 50px;
      margin-left: 3%;
      border: none;
      border-radius: 6px;
      color: white;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
