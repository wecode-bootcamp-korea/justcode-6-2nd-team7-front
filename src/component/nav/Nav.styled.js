import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  /* width: 100% */
  left: 0;
  right: 0;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.mainColor};

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1024px;
    height: inherit;
    margin: auto;

    li {
      list-style-type: none;
      ul {
        float: left;
        line-height: inherit;
      }
    }
  }

  .logo {
    width: 96px;
    height: 27px;
  }
`;
