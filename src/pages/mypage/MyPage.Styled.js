import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;

  .box {
    width: 100%;
    height: 211px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.mainColor};

    p {
      width: 1024px;
      height: 30px;
      padding: 80px;
      margin-top: 50px;
      /* padding-left: 205px; */
      margin-left: auto;
      /* margin-right: auto; */
      color: #fff;
      font-size: 38px;
      font-weight: normal;
    }
  }
`;

export const MyPageContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  /* margin-left: 100px; */
  margin-left: 20%;
  /* margin-right: auto; */
  padding-left: 95px;

  a {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
    text-decoration-line: none;

    &.points {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.coupons {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.reservations {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.my {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
