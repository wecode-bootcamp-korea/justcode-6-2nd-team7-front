import styled from 'styled-components';

export const LoginForm = styled.form`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;
  display: flex;
  flex-direction: column;

  .login-img {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 100px;
      height: 80px;
    }
  }

  .login-btn {
    height: 100px;
    button {
      width: 100%;
      height: 50px;
      margin-top: 3%;
      border: none;
      border-radius: 4px;
    }
    .kakao {
      background: rgb(252, 229, 30);
    }
    .facebook {
      background: rgb(24, 119, 242);
      color: #fff;
    }
    .naver {
      background: rgb(40, 209, 17);
      color: #fff;
    }
  }
`;

export const LoginInput = styled.div`
  margin-top: 35%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const LineContainere = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  span {
    width: 60px;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    font-size: 16px;
    line-height: 56px;
    background: white;
    z-index: 1;
    color: rgba(0, 0, 0, 0.38);
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
    font-size: 18px;
    padding-left: 30px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.26);
  }
  .email-check {
    color: red;
    font-size: 15px;
  }
  button {
    margin-top: 5px;
    height: 50px;
    background: #01aef0;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const EmailInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    display: inline-block;
    content: '';
    position: absolute;
    top: 19px;
    left: 0;
    margin-left: 10px;
    width: 18px;
    height: 14px;
    background: url('https://image.goodchoice.kr/images/web_v3/ico_inp_mail.png') 0 0 no-repeat;
    background-size: 18px auto;
  }

  input {
    width: 100%;

    &:focus {
      &::after {
        position: absolute;
        top: 20px;
        left: 0;
        margin-left: 10px;
        background: url('https://image.goodchoice.kr/images/web_v3/ico_inp_mail.png') 0 -28px no-repeat;
        background-size: 18px auto;
      }
    }
  }
`;

export const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:after {
    display: inline-block;
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    margin-left: 10px;
    width: 18px;
    height: 15px;
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
        right: 50%;
        width: 2px;
        height: 15px;
        background: rgba(0, 0, 0, 0.08);
      }
    }
    &:last-child {
      margin-right: 20px;
    }
  }
`;
