import styled from 'styled-components';

export const BoxStyle = styled.section`
  width: 1024px;
  margin: 32px auto;
  padding: 0px 30px;
  white-space: pre-wrap;

  .container {
    color: ${({ theme }) => theme.colors.bkText};

    span {
      font-size: 24px;
      font-weight: 700;
    }

    .box-container {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .box {
        display: flex;
        width: 470px;
        height: 162px;
        border: 1px solid #00000014;
        background-color: #ffff;
        &:hover {
          cursor: pointer;
        }

        .img {
          width: 162px;
          height: 162px;
        }

        .box-text {
          margin: auto 20px;
          font-size: 16px;

          div {
            margin: 10px auto;
          }

          .box-title {
            font-size: 20px;
            font-weight: 500;
          }

          .box-content {
            color: ${({ theme }) => theme.colors.text};
            font-weight: 300;
            line-height: 25px;
          }
        }

        .event {
          margin: auto 40px;
        }

        .title-adv {
          color: ${({ theme }) => theme.colors.mainColor};
          font-size: 23px;
          font-weight: 700;
        }

        .title-apply {
          color: ${({ theme }) => theme.colors.bkText};
          font-size: 23px;
          font-weight: 700;
        }

        .event-icon {
          width: 100px;
          height: 100px;
          margin: auto 0px auto 80px;
        }
      }
    }
  }
`;
