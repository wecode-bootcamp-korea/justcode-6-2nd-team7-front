import styled from 'styled-components';

export const NavStyle = styled.nav`
  height: 72px;
  background-color: ${({ theme }) => theme.colors.mainColor};

  .nav-container {
    display: flex;
    align-items: center;
    width: 1024px;
    height: inherit;
    margin: auto;

    span {
      line-height: inherit;
    }
  }

  .logo {
    width: 96px;
    height: 27px;
  }
`;
