import styled from 'styled-components';

const NewsContainer = styled.section`
  width: 1024px;
  margin: 32px auto;
  padding: 0px 30px;

  .container {
    color: ${({ theme }) => theme.colors.bkText};
    span {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .news-box {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    .news {
      display: flex;
      width: 470px;
      border: 1px solid #00000014;
      background-color: #ffff;
      &:hover {
        cursor: pointer;
      }

      .img {
        width: 162px;
        height: 162px;
      }

      .news-text {
        margin: auto 20px;
        font-size: 16px;
        div {
          margin: 10px auto;
        }

        .news-title {
          font-size: 20px;
          font-weight: 500;
        }

        .news-content {
          color: ${({ theme }) => theme.colors.text};
          font-weight: 300;
          line-height: 25px;
        }
      }
    }
  }
`;

const Event = () => {
  return (
    <NewsContainer>
      <div className='container'>
        <span>저기어때 소식</span>
        <div className='news-box'>
          <div className='news'>
            <img className='img' alt='business' src='images/main/news/business.png' />
            <div className='news-text'>
              <div className='news-title'>저기어때 비즈니스</div>
              <div className='news-content'>
                출장부터 복지까지 <br />
                저기어때 비즈니스로 스마트하게
              </div>
            </div>
          </div>
          <div className='news'>
            <img className='img' alt='business' src='images/main/news/font.png' />
            <div className='news-text'>
              <div className='news-title'>저기어때 서체출시</div>
              <div className='news-content'>
                젊고 당당한 저기어때 잘난체 <br />
                지금 다운로드 받으세요!
              </div>
            </div>
          </div>
        </div>
      </div>
    </NewsContainer>
  );
};

export default Event;
