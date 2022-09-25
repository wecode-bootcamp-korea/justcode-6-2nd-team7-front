import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 38px;

  .filter-container {
    width: 100%;
    margin-right: 10px;
    border: 1px solid #00000014;
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 25%;
      height: 38px;
      border: none;
      border-right: 1px solid #00000014;
      border-radius: 0;
      background-color: #00000005;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;
      &:last-child {
        border: none;
      }

      .icon {
        display: none;
        margin-right: 10px;
      }
    }

    .selected {
      color: ${({ theme }) => theme.colors.mainColor};

      .icon {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #00000014;
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 80px;
      height: 38px;
      border: none;
      border-radius: 0;
      background-color: #00000005;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;

      &:active {
        color: ${({ theme }) => theme.colors.mainColor};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
