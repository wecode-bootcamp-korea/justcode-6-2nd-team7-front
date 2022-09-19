import styled from 'styled-components';
import mainColor from '../../styles/theme';

export const SignUpForm = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;

  .signup-container {
    height: 70%;
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    justify-content: space-around;

    .signup-header {
      font-size: 24px;
      font-weight: bold;
      margin: 0 auto;
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
      font-size: 16px;
      margin-top: 16px;
      border-radius: 6px;
      color: #fff;
      border: none;
    }
    .activate {
      width: 100%;
      height: 56px;
      font-size: 16px;
      margin-top: 16px;
      border-radius: 6px;
      color: white;
      border: none;
      background-color: #01aef0;
      cursor: pointer;
    }
  }
`;
