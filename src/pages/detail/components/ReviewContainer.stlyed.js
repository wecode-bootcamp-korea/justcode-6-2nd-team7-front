import styled from 'styled-components';

export const ReviewContainer = styled.div`
  .score-top {
    padding: 44px 0;
    text-align: center;
    .general-review {
      display: block;
      padding: 0 0 10px 0;
      font-size: 24px;
      font-weight: normal;
      text-align: center;
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
        background-position: 4px ${(props) => props.score}px;
      }
      .score-num {
        margin-top: 4px;
        font-size: 24px;
      }
    }
    .review-total {
      margin-top: 22px;
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
    }
  }
`;

export const Review = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
  display: flex;
  .icon-wrapper {
    .icon-size {
      width: 56px;
      height: 56px;
      margin: 30px;
    }
  }
  .name-flex {
    display: flex;
    .name {
      padding: 15px 0 15px 0;
      color: ${({ theme }) => theme.colors.text};
      font-size: 18x;
    }
  }

  .comment-wrapper {
    width: 750px;
    padding-left: 30px;
    .score {
      margin-top: 10px;
      display: flex;
      .star {
        width: 122px;
        height: 22px;
        background: no-repeat url('/images/detail/star.png');
        background-size: 180px;
        overflow: hidden;
        background-position: 4px ${(props) => props.score}px;
      }
    }
  }

  .image-size {
    width: 388px;
    height: 288px;
  }
  .comment-style {
    font-size: 16px;
    padding-bottom: 20px;
  }
`;
