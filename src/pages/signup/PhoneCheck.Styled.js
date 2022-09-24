import styled from 'styled-components';

export const PhoneContainer = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 100px;

  .title {
    margin: 7% 0;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .subTitle {
    margin-bottom: 7%;
    margin-left: 5px;
    font-size: 15px;
  }
`;

export const PhoneBox = styled.div`
  height: 100px;
  margin-left: 5px;

  p {
    margin-bottom: 3%;
    font-size: 16px;
  }

  .phone-num {
    position: relative;
    height: 50%;

    input {
      height: 80%;
      width: 57%;
      padding-left: 15px;
      color: #0000008f;
      border: 1px solid #00000014;
      border-radius: 5px;
      font-size: 18px;
    }

    .timer {
      position: absolute;
      left: 140px;
      bottom: 10px;
    }

    button {
      width: 30%;
      height: 83%;
      margin-left: 15px;
      border: none;
      border-radius: 5px;
    }
    .button {
      background: #01aef0;
      color: #fff;
      cursor: pointer;
    }
    .disabled {
      background: #ccc;
      color: #fff;
    }

    .phone-error {
      color: red;
      font-size: 14px;
    }
  }
`;
