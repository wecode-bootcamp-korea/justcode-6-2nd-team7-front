import EventSlide from './EventSlide';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer, faHouse } from '@fortawesome/free-solid-svg-icons';

import { BoxStyle } from './BoxStyle.Styled';

const Event = () => {
  const eventArr = [
    {
      id: 1,
      eng: 'adv',
      title: '저기어때 \n광고 신청하기',
      content: '고정고객 확보, \n신규회원 유치 가능합니다.',
      icon: faArrowPointer,
      className: 'title-adv',
    },
    {
      id: 2,
      eng: 'apply',
      title: '게스트하우스\n숙소 등록하기',
      content: '숙소 등록하고 \n더 많은 고객 확보하세요!',
      icon: faHouse,
      className: 'title-apply',
    },
  ];

  return (
    <>
      <BoxStyle>
        <div className='container'>
          <span>이벤트</span>
          <EventSlide />
          <div className='box-container'>
            {eventArr.map((event) => {
              return (
                <div className='box' key={event.id}>
                  <div className='box-text event'>
                    <div className={event.className}>{event.title}</div>
                    <div className='box-content'>{event.content}</div>
                  </div>
                  <FontAwesomeIcon className='event-icon' icon={event.icon} color='#01AEF0' />
                  {/*  theme.js에서 메인컬러 가져오려했는데 실패..일단 하드코딩 */}
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
