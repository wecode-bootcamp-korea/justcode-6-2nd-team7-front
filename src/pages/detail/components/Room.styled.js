import styled from 'styled-components';

export const RoomType = styled.div`
  width: 1024px;
  margin-top: 50px;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.greyBg};
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .flex-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img-size {
    display: inline;
    width: 376px;
    height: 226px;
    cursor: pointer;
  }
  .icon-style {
    position: relative;
    bottom: 10px;
    right: 33px;
    width: 24px;
    height: 24px;
    color: #ffffff;
    cursor: pointer;
  }
  .subject {
    display: block;
    width: 512px;
    height: 48px;
    padding: 0;
    font-size: 20px;
  }
  .underline-style {
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
  }
  .use-button {
    text-align: left;
    width: 100%;
    height: 60px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
  }
  .reservation-button {
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
  }
  .remain {
    margin-bottom: 5px;
    text-align: right;
    color: ${({ theme }) => theme.colors.text};
  }
  .font-style {
    font-size: 18px;
  }
`;
