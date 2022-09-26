import styled from 'styled-components';

export const ReviewContainer = styled.div`
  .score-top {
    padding: 44px 0;
    text-align: center;
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
  }
  .name-flex {
    display: flex;
  }
  .score {
    display: inline-block;
    position: relative;
    top: -1px;
    padding-left: 12px;
    font-size: 32px;
    line-height: 1;
    vertical-align: top;
  }
  .review-style {
    margin-top: 22px;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
  }
`;
