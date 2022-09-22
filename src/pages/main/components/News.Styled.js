import styled from 'styled-components';

export const NewsContainer = styled.section`
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

    .news-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .news {
        display: flex;
        width: 470px;
        border: 1px solid #00000014;
        background-color: #ffff;
        &:hover {
          cursor: pointer;
        }

        .img {
          width: 162px;
          height: 162px;
        }

        .news-text {
          margin: auto 20px;
          font-size: 16px;
          div {
            margin: 10px auto;
          }

          .news-title {
            font-size: 20px;
            font-weight: 500;
          }

          .news-content {
            color: ${({ theme }) => theme.colors.text};
            font-weight: 300;
            line-height: 25px;
          }
        }
      }
    }
  }
`;
