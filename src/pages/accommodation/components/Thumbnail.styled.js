import styled from 'styled-components';

export const ThumbList = styled.li`
  background: url(${(props) => props.img}) no-repeat top center;
  background-size: cover;

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    height: 280px;
    padding: 25px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    color: #fff;

    .promotion {
      position: absolute;
      left: 0;
      top: 25px;
      padding: 1px 10px 1px 15px;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 18px;
    }

    .align-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .rating {
        display: inline-block;
        margin-bottom: 7px;
        padding: 2px;
        background-color: ${({ theme }) => theme.colors.lowRating};
        font-size: 14px;
      }

      .rating.high {
        background-color: ${({ theme }) => theme.colors.highRating};
      }

      .name {
        margin-bottom: 7px;
        font-size: 26px;
        font-weight: 700;
        color: #fff;
      }

      .score {
        margin-bottom: 7px;
        color: ${({ theme }) => theme.colors.yellow};
        font-size: 20px;
      }

      .location {
        font-size: 20px;
      }
      .price-container {
        text-align: right;

        .remaining-room {
          margin-bottom: 3px;
          font-size: 20px;
        }

        .original-price {
          margin-bottom: 3px;
          font-size: 20px;
          text-decoration: line-through;
          opacity: 0.8;
        }

        .final-price {
          font-weight: 700;
          font-size: 22px;
        }
      }
    }
  }
`;
