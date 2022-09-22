import styled from 'styled-components';

const EventContainer = styled.section`
  width: 1024px;
  margin: 32px auto;
  padding: 0px 30px;

  .container {
    span {
      font-size: 24px;
      font-weight: 700;
    }

    div {
      border: 1px solid black;
    }
  }

  .event-box {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .event {
      display: flex;
      .img {
        width: 162px;
        height: 162px;
      }

      .event-text {
        margin: auto;
      }
    }
  }
`;

const Event = () => {
  return (
    <EventContainer>
      <div className='container'>
        <span>저기어때 소식</span>
        <div className='event-box'>
          <div className='event'>
            <img className='img' alt='business' src='images/main/news/business.png' />
            <div className='event-text'>
              <div>저기어때 비즈니스</div>
              <div>
                출장부터 복지까지 <br />
                저기어때 비즈니스로 스마트하게
              </div>
            </div>
          </div>
          <div className='event'>
            <img className='img' alt='business' src='images/main/news/font.png' />
            <div>
              <div>저기어때 서체출시</div>
              <div>
                젊고 당당한 저기어때 잘난체 <br />
                지금 다운로드 받으세요!
              </div>
            </div>
          </div>
        </div>
      </div>
    </EventContainer>
  );
};

export default Event;
