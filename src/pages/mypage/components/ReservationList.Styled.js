import styled from 'styled-components';

export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px;

  p {
    font-size: 18px;
    font-weight: 700;
  }

  .reservation {
    margin-bottom: 5%;
  }

  .more-reservation {
    display: flex;
    flex-wrap: wrap;

    .reservation-container {
      position: relative;
      width: 300px;
      height: 380px;
      margin-right: 2%;
      margin-top: 2%;
      border: 1px solid rgb(230, 230, 230);

      .delete {
        position: absolute;
        top: 10px;
        right: 0;
        border: none;
        background: none;
        font-size: 20px;
      }

      .reservation-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30%;

        span {
          margin: 3%;
          background-color: rgb(230, 230, 230);
          font-size: 15px;
        }

        h2 {
          font-size: 18px;
          font-weight: 700;
        }

        p {
          font-weight: 400;
        }
      }

      .rebook {
        margin-left: 40%;
        background: none;
        border: none;
        color: rgb(13, 103, 88);
        font-size: 15px;
      }
    }
  }
`;
