import styled from 'styled-components';

export const SearchModalBg = styled.div`
  display: ${(props) => (props.listStyle === 'block' ? 'none' : 'block')};
  position: fixed;
  top: 72px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #00000059;
  &:hover {
    cursor: default;
  }
`;

export const Recommend = styled.div`
  position: relative;
  height: 30px;
  margin: 24px auto 0px;
  background-color: #ffff;
  &:hover {
    cursor: default;
  }

  .recommend-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0px 15px 20px;
    background-color: #ffff;
    border-radius: 3px;

    .title {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 15px;
    }

    a {
      width: 200px;
      margin: 4px 0px;
      font-weight: 300;
      font-size: 14.6px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
