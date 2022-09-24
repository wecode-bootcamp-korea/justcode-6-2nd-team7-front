import styled from 'styled-components';

const grayBorder = '#00000030';

//<<<<<<<<<<메인 컴포넌트>>>>>>>>>>
export const MainContainerStyle = styled.section`
  width: 564px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 17.8px;

  /* 공통으로 사용되는 클래스 */
  .container {
    padding-bottom: 10px;
    margin-bottom: 28px;
    border-bottom: 1px solid ${grayBorder};

    button {
      height: 40px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
    }

    input {
      padding-left: 16px;
      border: 1px solid ${grayBorder};
      border-radius: 3px;
      font-size: 18px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-weight: 300;
      }
    }

    .title {
      margin-bottom: 22px;
      color: ${({ theme }) => theme.colors.bkText};
      font-size: 18.7px;
      font-weight: bold;
    }

    .small-text {
      margin-top: 8px;
      font-size: 14px;
    }

    .button-line {
      margin-top: 20px;
    }
  }

  /* 예약자정보 관련 클래스 */
  .user-info {
    label {
      font-weight: 600;
    }
    .input-info {
      width: 560px;
      height: 48px;
      margin-top: 12px;
    }

    .input-valid {
      height: 40px;
      color: #ff0000;
    }

    .none {
      color: #ffff;
    }
  }

  /* 할인수단 관련 클래스 */
  .sale {
    padding-bottom: 30px;

    .line {
      display: flex;
      justify-content: space-between;
    }

    .totalPrice {
      color: ${({ theme }) => theme.colors.bkText};
      font-weight: 700;
    }

    .input-point {
      width: 132px;
      height: 40px;
      padding-right: 15px;
      margin-right: 5px;
    }
  }

  /* 결제 관련 클래스 */
  .payment {
    select {
      width: 288px;
      height: 48px;
      padding-left: 16px;
      margin-bottom: 28px;
      border: 1px solid ${grayBorder};
      border-radius: 3px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 18px;
      &:focus {
        outline: none;
      }
    }

    .check-container {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      font-size: 16px;

      div {
        margin: 9px 0px;
        padding: auto;

        input {
          transform: scale(1.7);
          margin: auto 18px auto 0px;
        }

        .check-title {
          font-size: 16px;
        }

        .essential {
          margin-left: 5px;
          color: #ff0000;
        }

        .underline {
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`;
