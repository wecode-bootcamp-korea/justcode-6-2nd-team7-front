import styled from 'styled-components';

export const PhoneContainer = styled.div`
  width: 336px;
  height: 550px;
  margin: auto;
  margin-top: 8%;

  .title {
    margin: 7% 0;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }

  .subTitle {
    margin-bottom: 7%;
    font-size: 15px;
    margin-left: 5px;
  }

  .phone-container {
    height: 100px;
    margin-left: 5px;

    p {
      font-size: 16px;
      margin-bottom: 3%;
    }

    .phone-num {
      height: 50%;

      input {
        height: 80%;
        width: 57%;
        padding-left: 15px;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.56);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 5px;
      }

      .button {
        width: 30%;
        height: 83%;
        background: #01aef0;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-left: 15px;
        cursor: pointer;
      }
      .disabled {
        width: 30%;
        height: 83%;
        background: #ccc;
        color: #fff;
        border: none;
        border-radius: 5px;
        margin-left: 15px;
      }
    }
  }
`;
