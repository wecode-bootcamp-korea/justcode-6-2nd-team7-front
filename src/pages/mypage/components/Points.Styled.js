import styled from 'styled-components';

export const PointContainer = styled.div`
  width: 100%;
  margin: 10px;
  .points {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .point-box {
    width: 80%;
    height: 100px;
    padding: 20px;
    background-color: #f2f8ff;
    border-radius: 16px;

    .my-points {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 5px;
      color: #1273e4;
    }
    h2 {
      font-size: 30px;
      color: #1273e4;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .point-delete {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.48);
    }
  }
`;
