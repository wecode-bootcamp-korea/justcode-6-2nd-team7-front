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

  .phone-container {
    height: 100px;
    margin-left: 5px;

    p {
      margin-bottom: 3%;
      font-size: 16px;
    }

    .phone-num {
      height: 50%;

      input {
        height: 80%;
        width: 57%;
        padding-left: 15px;
        color: rgba(0, 0, 0, 0.56);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        font-size: 18px;
      }

      .button {
        width: 30%;
        height: 83%;
        margin-left: 15px;
        background: #01aef0;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }

      .disabled {
        width: 30%;
        height: 83%;
        margin-left: 15px;
        background: #ccc;
        color: #fff;
        border: none;
        border-radius: 5px;
      }
    }
  }
`;
