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
      padding-left: 205px;
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
  margin-left: 100px;
  padding-left: 95px;

  a {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
    text-decoration-line: none;

    &.a {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.b {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.c {
      color: ${({ theme }) => theme.colors.mainColor};
    }
    &.d {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }
`;
