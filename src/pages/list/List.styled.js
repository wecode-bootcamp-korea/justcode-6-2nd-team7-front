import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 211px;
  background-color: ${(props) => props.theme.colors.mainColor};

  .container {
    width: 1024px;
    margin: 0 auto 0 auto;
    padding: 90px 31px 0 31px;
    color: #fff;

    h2 {
      margin: 10px 0 13px 31px;
      font-size: 38px;
      font-weight: 400;
    }

    .btn-container {
      display: inline-block;
      position: relative;
      margin-left: 19px;
      padding: 10px 10px 7px 10px;
      background-color: #009fef;
      border-radius: 5px;

      .btn-area {
        font-size: 18px;
        font-weight: 700;
      }

      .region-container {
        display: flex;
        height: 555px;
        position: absolute;
        top: 50px;
        left: -25px;
        background-color: #fff;
        border: 1px solid red;
        border-radius: 5px;
        color: #000;
        font-size: 15px;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

        .city-list {
          width: 167px;
          padding: 25px 10px 25px 30px;
          border-right: 1px solid #000;

          div {
            display: flex;

            li {
              width: 100%;
              margin-bottom: 13px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .arrow {
              display: none;
            }
          }

          div.selected {
            li {
              color: ${(props) => props.theme.colors.mainColor};
            }
            .arrow {
              display: inline-block;
              color: #999;
            }
          }
        }

        .region-list {
          width: 300px;
          padding: 25px 30px;

          li {
            width: 100%;
            margin-bottom: 20px;
            &:last-child {
              margin-bottom: 0;
            }
            &:hover {
              color: ${(props) => props.theme.colors.mainColor};
            }
          }

          li.selected {
            color: ${(props) => props.theme.colors.mainColor};
          }
        }
      }
    }
  }
`;
