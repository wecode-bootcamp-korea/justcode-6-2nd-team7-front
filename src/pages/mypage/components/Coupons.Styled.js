import styled from 'styled-components';

export const CouponsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  .coupons-box {
    display: flex;
    padding-left: 20px;
    .coupons {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.mainColor};
      margin-right: 20px;
    }
    .my-coupons {
      font-size: 18px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  .content {
    padding: 100px;
    padding-left: 200px;
    font-size: 20px;
    font-weight: bold;
  }
`;
