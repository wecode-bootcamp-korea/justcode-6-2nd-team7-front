import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 100px;

  .login-img {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 100px;
      height: 80px;
    }
  }

  .login-btn {
    height: 100px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      margin-top: 3%;
      border: none;
      border-radius: 4px;
      font-size: 17px;

      .icon {
        font-size: 20px;
      }

      .letter {
        font-size: 16px;
        margin-left: 6px;
      }
    }

    .kakao {
      background: rgb(252, 229, 30);
      color: #2c1510;
    }
    p {
    }

    .facebook {
      background: rgb(24, 119, 242);
      color: #fff;
    }

    .naver {
      background: rgb(40, 209, 17);
      color: #fff;

      span {
        font-weight: 900;
      }
    }
  }
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  margin-top: 35%;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 336px;

  span {
    width: 60px;
    height: 40px;
    margin-top: -30px;
    background: white;
    color: rgba(0, 0, 0, 0.38);
    font-size: 16px;
    text-align: center;
    line-height: 56px;
    z-index: 1;
  }

  &:after {
    content: '';
    display: flex;
    position: absolute;
    width: 336px;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 50px;
    padding-left: 30px;
    margin-bottom: 5px;
    font-size: 18px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.26);
  }

  .email-check {
    color: #ff0000;
    font-size: 15px;
  }

  .error-message {
    margin-top: 5px;
    color: #ff0000;
    font-size: 15px;
  }

  button {
    height: 50px;
    margin-top: 5px;
    color: #000;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
    cursor: pointer;
  }
`;

export const EmailInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 18px;
    height: 14px;
    margin-left: 10px;
    top: 19px;
    left: 0;
    background: url('https://image.goodchoice.kr/images/web_v3/ico_inp_mail.png') 0 0 no-repeat;
    background-size: 18px auto;
  }

  input {
    width: 100%;

    &:focus {
      &::after {
        position: absolute;
        margin-left: 10px;
        top: 20px;
        left: 0;
        background: url('https://image.goodchoice.kr/images/web_v3/ico_inp_mail.png') 0 -28px no-repeat;
        background-size: 18px auto;
      }
    }
  }
`;

export const PasswordInput = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 0;
    width: 18px;
    height: 15px;
    margin-left: 10px;
    background: url('https://image.goodchoice.kr/images/web_v3/ico_inp_pw.png') 50% 0 no-repeat;
    background-size: 18px auto;
  }

  input {
    width: 100%;
  }
`;

export const LoginFooter = styled.div`
  display: flex;
  justify-content: space-around;
  height: 30px;

  a {
    color: black;
    text-decoration: none;

    &:first-child {
      &:after {
        content: '';
        position: absolute;
        width: 2px;
        height: 15px;
        right: 50%;
        background: rgba(0, 0, 0, 0.08);
      }
    }

    &:last-child {
      margin-right: 20px;
    }
  }
`;
