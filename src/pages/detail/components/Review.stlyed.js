import styled from 'styled-components';

export const ReviewContainer = styled.div`
  .score-top {
    padding: 44px 0;
    text-align: center;
  }

  .review-style {
    margin-top: 22px;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
  }
  .score-total {
    display: flex;
    justify-content: center;
    .star-total {
      width: 203px;
      height: 36px;
      background: no-repeat url('/images/detail/star.png');
      background-size: 328px;
      overflow: hidden;
    }
    .one {
      background-position: 4 -45px;
    }
  }
  .score-num {
    margin-top: 4px;
    font-size: 24px;
  }

  .general-review {
    display: block;
    padding: 0 0 10px 0;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
  }

  .img-size {
    width: 56px;
    height: 56px;
    margin: 30px;
  }
  .review-flex {
    display: flex;
    justify-content: space-between;
    margin: 40px;
    padding-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
    .comment-wrapper {
      padding-left: 30px;
      .name-flex {
        display: flex;
      }
    }
    .score {
      margin-top: 10px;
      display: flex;
    }
    .star {
      border: 1px solid black;
      width: 100px;
      height: 20px;
      background: no-repeat url('/images/detail/star.png');
      background-size: 128px;
      overflow: hidden;
    }
    .name {
      padding: 15px 0 15px 0;
      color: ${({ theme }) => theme.colors.text};
      font-size: 18x;
    }
    .comment-style {
      font-size: 16px;
      padding-bottom: 20px;
    }
  }
  .image-size {
    width: 388px;
    height: 288px;
  }
`;
