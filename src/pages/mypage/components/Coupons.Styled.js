import styled from 'styled-components';

export const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  .coupons-box {
    display: flex;
    .coupons {
      font-size: 18px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
      margin-right: 20px;
    }
    .my-coupons {
      font-size: 18px;
      font-weight: 700;
      color: #01aef0;
    }
  }

  .content {
    padding: 100px;
  }
`;
