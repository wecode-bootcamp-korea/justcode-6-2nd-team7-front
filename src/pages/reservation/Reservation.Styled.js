import styled from 'styled-components';

const grayBorder = '#00000030';

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

export const SubContainerStyle = styled.section`
  width: 310px;
  color: ${({ theme }) => theme.colors.bkText};
  font-size: 19px;

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
