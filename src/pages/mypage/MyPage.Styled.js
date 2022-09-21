import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;

  .box {
    width: 100%;
    height: 211px;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.colors.mainColor};

    p {
      padding: 80px;
      padding-top: 90px;
      padding-left: 205px;
      color: #fff;
      font-size: 38px;
      font-weight: normal;
    }
  }
`;

export const MyPageContainer = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 100px;

  a {
    text-decoration-line: none;
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
    &.a {
      color: #01aef0;
    }
    &.b {
      color: #01aef0;
    }
    &.c {
      color: #01aef0;
    }
    &.d {
      color: #01aef0;
    }
  }
`;
