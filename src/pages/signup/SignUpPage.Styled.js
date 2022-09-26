import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;

  .signup-img {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100px;
      height: 80px;
    }
  }

  form {
    .signup {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5%;
    }

    .input-container {
      margin-left: 3%;
      display: flex;
      flex-direction: column;
      p {
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.56);
        margin-bottom: 3%;
      }
      input {
        width: 90%;
        height: 40px;
        padding: 0 10px;
        margin-bottom: 10%;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 6px;
        font-size: 18px;
      }
      .nickname {
        margin-right: 3%;
      }
      .nickname-btn {
        width: 27%;
        height: 43px;
        border-radius: 6px;
        border: none;
        background: #ebebeb;
        font-size: 14px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.56);
      }
    }

    button {
      margin-left: 3%;
      width: 95%;
      height: 50px;
      border: none;
      border-radius: 6px;
      color: white;
    }
  }
`;
