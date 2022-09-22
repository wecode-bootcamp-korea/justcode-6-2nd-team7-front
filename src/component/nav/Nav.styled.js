import styled from 'styled-components';

export const NavStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 99;

  .nav-origin {
    height: inherit;
    background-color: ${({ theme }) => theme.colors.mainColor};
    transition: all ease 0.5s 0s;

    .nav-link {
      color: #ffffffc4;
      &:hover {
        color: #ffff;
      }
    }
  }

  .nav-change {
    background-color: #ffff;
    height: inherit;
    transition: all ease 0.5s 0s;
    box-shadow: 0 4px 6px rgb(0 0 0 / 15%);

    .nav-link {
      color: #525252;
      &:hover {
        color: #000000;
      }
    }
  }

  .nav-container {
    display: flex;
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

    .nav-content {
      display: flex;

      .search-icon-box {
        display: flex;
        flex-direction: row-reverse;
        width: 584px;
        margin-right: 30px;
        padding-right:0px
        transition-duration: 0.5s;
        &:hover {
          cursor: pointer;
        }
        
        .search-icon{
        transition-duration: 0.5s;
        }
      }

      .search-icon-change {
        .search-icon{
        transform: translate(-500px, 0px);
        transition-duration: 0.5s;
        }
      }

      .navigate-list {
        .list {
          float: left;
          line-height: inherit;

          .nav-link {
            margin-left: 20px;
            font-size: 18px;
          }
        }
      }
    }
  }
`;
