import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  z-index: 99;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    height: inherit;
    margin: auto;

    .navigate-list {
      list-style-type: none;
      ul {
        float: left;
        line-height: inherit;
        a {
          margin-left: 20px;
          color: rgba(255, 255, 255, 0.767);
          font-size: 17px;
          text-decoration: none;

          &:hover {
            color: #ffff;
          }
        }
      }
    }
  }

  .logo {
    width: 96px;
    height: 27px;
  }
`;
