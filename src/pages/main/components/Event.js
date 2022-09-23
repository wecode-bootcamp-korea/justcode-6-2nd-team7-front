import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faHouse } from '@fortawesome/free-solid-svg-icons';
import { BoxStyle } from './BoxStyle.Styled';

const SlideStyle = styled.div``;

const Event = () => {
  const eventArr = [
    {
      id: 1,
      eng: 'adv',
      title: '저기어때 \n광고 신청하기',
      content: '고정고객 확보, \n신규회원 유치 가능합니다.',
      img: <FontAwesomeIcon className='event-icon' icon={faArrowPointer} color='#01AEF0' />,
      className: 'title-adv',
      // theme.js에서 메인컬러 가져오려했는데 실패..일단 하드코딩
    },
    {
      id: 2,
      eng: 'apply',
      title: '게스트하우스\n숙소 등록하기',
      content: '숙소 등록하고 \n더 많은 고객 확보하세요!',
      img: <FontAwesomeIcon className='event-icon' icon={faHouse} color='#01AEF0' />,
      className: 'title-apply',
    },
  ];

  // 'https://image.goodchoice.kr/images/cms/home_img/3c13f7bf4ea5ef67729fa285aca7896f.jpg';
  // 'https://image.goodchoice.kr/images/cms/home_img/4b9d41f51f329355f76c0daad7dc5027.jpg';
  // 'https://image.goodchoice.kr/images/cms/home_img/fb4507e69d3fa1779d4623946aa76244.jpg'

  return (
    <>
      <BoxStyle>
        <div className='container'>
          <span>이벤트</span>
          <SlideStyle>이벤트 슬라이드</SlideStyle>
          <div className='box-container'>
            {eventArr.map((event) => {
              return (
                <div className='box' key={event.id}>
                  <div className='box-text event'>
                    <div className={event.className}>{event.title}</div>
                    <div className='box-content'>{event.content}</div>
                  </div>
                  {event.img}
                </div>
              );
            })}
          </div>
        </div>
      </BoxStyle>
    </>
  );
};

export default Event;
