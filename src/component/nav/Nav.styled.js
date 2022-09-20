import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  font-family: pretendard;
  z-index: 99;

  .nav-origin {
    height: inherit;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: all ease 0.5s 0s;

    a {
      color: rgba(255, 255, 255, 0.767);
      &:hover {
        color: #ffff;
      }
    }
  }

  .nav-change {
    background-color: #ffff;
    height: inherit;
    transition: all ease 0.5s 0s;
    box-shadow: 0 4px 4px -4px rgb(0 0 0 / 15%);

    a {
      color: rgb(82, 82, 82);
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    height: inherit;
    margin: auto;

    .logo-box {
      display: flex;
      height: inherit;
      align-items: center;
      .logo {
        width: 96px;
        height: 27px;
      }
    }

    .navigate-list {
      list-style-type: none;
      .list {
        float: left;
        line-height: inherit;
        .nav-link {
          margin-left: 20px;
          font-size: 18px;
          text-decoration: none;
        }
      }
    }
  }
`;
