import styled from 'styled-components';

const grayBorder = '#00000030';

// 가장 바깥 컨테이너
export const ReservationStyle = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 100px auto 0px;
  padding: 0px 30px;

  button {
    border: 1px solid ${grayBorder};
    border-radius: 3px;
    &:hover {
      cursor: pointer;
    }
  }
`;

//메인 컨테이너
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
  }
  /* 할인수단 관련 클래스 */
  .sale {
    padding-bottom: 30px;
    p {
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
  /* 결제수단 관련 클래스 */
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
      font-size: 16px;

      div {
        margin: 5px 0px;

        .essential {
          margin-left: 5px;
          color: #ff0000;
        }
      }

      input {
        margin-right: 10px;
      }

      .check-title {
        font-size: 16px;
      }

      .underline {
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

//서브 컨테이너
export const SubContainerStyle = styled.section`
  width: 310px;
  color: ${({ theme }) => theme.colors.bkText};
  font-size: 19px;

  div {
    /* border: 1px solid black; */
  }

  .container {
    padding: 40px 25px;
    background-color: ${({ theme }) => theme.colors.greyBg};

    .title {
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      font-weight: 300;
    }

    .content {
      margin: 5px 0px 30px;
    }

    .total {
      border-top: 1px solid ${grayBorder};
      padding-top: 30px;
      font-size: 14px;

      .bold {
        font-size: 18px;
        font-weight: 700;
      }

      .totalPrice {
        margin: 16px 0px 23px;
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 24px;
        font-weight: 700;
      }
    }

    ul {
      margin: 0px 19px;
      li {
        list-style-type: disc;
        font-size: 16px;
        font-weight: 300;
        span {
          color: ${({ theme }) => theme.colors.mainColor};
          font-weight: 500;
        }
      }
    }
  }

  button {
    width: 310px;
    height: 56px;
    border: 1px solid;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #ffff;
    font-size: 16px;
  }
`;
