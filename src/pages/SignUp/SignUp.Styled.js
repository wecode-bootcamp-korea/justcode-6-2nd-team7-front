import styled from 'styled-components';

export const SignUpForm = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;

  .signup-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 70%;
    margin-top: 5%;

    .signup-header {
      margin: 0 auto;
      font-size: 24px;
      font-weight: bold;
    }

    p {
      label {
        display: flex;
        align-items: center;

        span {
          margin-left: 10px;
          font-weight: bold;
        }
      }
    }

    p {
      display: flex;
      align-items: center;

      input {
        width: 24px;
        height: 24px;
      }

      span {
        font-size: 15px;
      }

      .underline {
        margin-left: 10px;
        text-decoration: underline;
      }

      .essential {
        color: red;
      }
    }
  }

  .next-button {
    .button {
      width: 100%;
      height: 56px;
      margin-top: 16px;
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 16px;
    }

    .activate {
      width: 100%;
      height: 56px;
      margin-top: 16px;
      border-radius: 6px;
      border: none;
      background-color: #01aef0;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
