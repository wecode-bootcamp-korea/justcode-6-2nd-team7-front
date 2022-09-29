import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { reservInfoState } from '../../atom';
import Information from './components/Information';
import ReviewContainer from './components/ReviewContainer';
import RoomGuide from './components/RoomGuide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './Detail.styled';
import EventModal from './components/EventModal';
import SubjectSlide from './components/SubjectSlide';
import axios from 'axios';

const Detail = () => {
  const params = useParams();
  const [info, setInfo] = useRecoilState(reservInfoState);
  const [openModal, setOpenModal] = useState(false);
  const [showData, setShowData] = useState();
  const [component, setComponent] = useState(1);

  const handleClickBtn = () => {
    setOpenModal(true);
  };

  const clickTab = (e) => {
    switch (e.target.value) {
      case '객실안내/예약':
        return setComponent(1);
      case '숙소정보':
        return setComponent(2);
      case '리뷰':
        return setComponent(3);
      default:
    }
  };
  useEffect(() => {
    axios
      .get('/data/detail/roomType.json')
      // .get(`http://localhost:8000/accommodation/rooms/details?acno=${params.id}`)
      .then((res) => {
        setShowData(res.data.roomTypeData[0]);

        setInfo({
          ...info,
          name: res.data.roomTypeData[0].name,
        });
      }) //console은 나중에 지우도록 하겠습니다.
      .catch((err) => {});
  }, []);

  return (
    <>
      {showData && (
        <S.DetailExplanation>
          <div className='item-wrapper'>
            <SubjectSlide sliderImg={showData.roomImg} />
            <div>
              <span className='type'>{showData.rating}</span>
              <span className='title'>{showData.name}</span>
              <div>
                <span className='rate'>{showData.score}</span>
                <span className='recommend'>{showData.recommend}</span>
              </div>
              <p className='address'>{showData.address}</p>
              {showData.event !== null && (
                <div>
                  <button className='event' onClick={handleClickBtn}>
                    <div className='icon-flex'>
                      <li className='li-style'>{showData.event[0]}</li>
                      <FontAwesomeIcon icon={faAngleRight} color='#fff' />
                    </div>
                  </button>
                  {openModal && (
                    <EventModal
                      open={openModal}
                      onClose={() => {
                        setOpenModal(false);
                      }}
                    />
                  )}
                </div>
              )}
              <div className='comment-ceo'>
                <p className='ceo'>사장님의 한마디</p>
                <p className='ripple'>{showData.ceo}</p>
              </div>
            </div>
          </div>
          <S.MenuBar>
            <button className='button' onClick={clickTab} value={'객실안내/예약'}>
              객실안내/예약
            </button>
            <button className='button' onClick={clickTab} value={'숙소정보'}>
              숙소정보
            </button>
            <button className='button' onClick={clickTab} value={'리뷰'}>
              리뷰
            </button>
          </S.MenuBar>
          <S.Context className='content'>
            {component === 1 ? (
              <RoomGuide roomType={showData.roomTypes} />
            ) : component === 2 ? (
              <Information informations={showData} />
            ) : (
              <ReviewContainer showData={showData} />
            )}
          </S.Context>
        </S.DetailExplanation>
      )}
    </>
  );
};

export default Detail;
