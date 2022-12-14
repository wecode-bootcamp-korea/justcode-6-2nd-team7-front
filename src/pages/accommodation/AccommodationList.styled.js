import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  height: 555px;
  position: absolute;
  top: 50px;
  left: -25px;
  background-color: #fff;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.bkText};
  font-size: 15px;
  box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
  z-index: 1;
  opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
  visibility: ${({ showMenu }) => (showMenu ? 'visible' : 'hidden')};
  transition: 0.3s;
`;

export const Header = styled.header`
  width: 100%;
  height: 211px;
  background-color: ${({ theme }) => theme.colors.mainColor};

  .container {
    width: 1024px;
    margin: 0 auto 0 auto;
    padding: 90px 31px 0 0;
    color: #fff;

    h2 {
      margin: 0 0 13px 10px;
      font-size: 38px;
      font-weight: 400;
    }

    .btn-container {
      display: inline-block;
      position: relative;
      padding: 10px 10px 7px 10px;
      background-color: #009fef;
      border-radius: 5px;
      cursor: pointer;

      .btn-area {
        font-size: 18px;
        font-weight: 700;
      }

      ${Menu} {
        .city-list {
          width: 167px;
          padding: 25px 10px 25px 30px;
          border-right: 1px solid #00000014;

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
              color: ${({ theme }) => theme.colors.mainColor};
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
              color: ${({ theme }) => theme.colors.mainColor};
            }
            &:active {
              color: #0098d6;
            }
          }

          li.selected {
            color: ${({ theme }) => theme.colors.mainColor};
          }
        }
      }
    }
  }
`;

export const Body = styled.div`
  display: flex;
  width: 1024px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 35px auto 0 auto;
  color: ${({ theme }) => theme.colors.bkText};

  .side-filter {
    width: 30%;
    margin-left: 10px;
    padding: 25px;
    border: 1px solid #00000014;
    border-radius: 5px;

    section {
      &:last-child {
        margin-bottom: 0;
      }
    }

    .date-container {
      border-bottom: 1px solid #00000014;
    }

    .btn-container {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .btn {
        width: 49%;
        height: 40px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }

      .white {
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
        color: ${({ theme }) => theme.colors.mainColor};
        &:hover {
          color: #009fef;
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.mainColor};
          border: 1px solid ${({ theme }) => theme.colors.mainColor};
          color: #fff;
        }
      }

      .blue {
        background-color: ${({ theme }) => theme.colors.mainColor};
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
        color: #fff;
        &:hover {
          background-color: #009fef;
          border: 1px solid #009fef;
        }
        &:active {
          background-color: #fff;
          border: 1px solid ${({ theme }) => theme.colors.mainColor};
          color: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }

    .no-title {
      li {
        &:last-child {
          margin-bottom: 50px;
        }
      }
    }

    .accommodation-type {
      font-size: 16px;
      margin-bottom: 50px;
    }

    .count-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;

      .count-box {
        display: flex;
        justify-content: space-around;
        width: 60%;
        color: ${({ theme }) => theme.colors.text};

        .count {
          width: 13px;
          font-weight: 700;
          color: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }

    .price-container {
      margin-bottom: 50px;

      h5 > span {
        margin-left: 15px;
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.mainColor};
      }

      .slider-box {
        width: 90%;
        margin: 0 auto;
      }

      .price-range {
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
      }
    }

    .bedtype-container {
      margin-bottom: 50px;

      ul {
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
          cursor: pointer;

          .icon {
            width: 48px;
            height: 24px;
            margin-bottom: 5px;
            background: no-repeat url('/images/accommodation/ico_room.png');
            background-size: 192px;
            overflow: hidden;
          }

          .single.selected {
            background-position: 0 -24px;
          }

          .double {
            background-position: -48px 0;
          }
          .double.selected {
            background-position: -48px -24px;
          }

          .twin {
            background-position: -96px 0;
          }
          .twin.selected {
            background-position: -96px -24px;
          }

          .sedentary {
            background-position: -144px 0;
          }
          .sedentary.selected {
            background-position: -144px -24px;
          }

          p {
            color: ${({ theme }) => theme.colors.text};
            &:active {
              color: #009fef;
            }
          }

          p.selected {
            color: ${({ theme }) => theme.colors.mainColor};
          }
        }
      }
    }
  }

  main {
    width: 66%;
  }

  .mb12 {
    margin-bottom: 12px;
  }

  .mb18 {
    margin-bottom: 18px;
  }

  .mt32 {
    margin-top: 32px;
  }

  .title {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

  .title-bk {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.bkText};
  }
`;
