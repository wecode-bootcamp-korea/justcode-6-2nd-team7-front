import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { reservInfoState, startDateState, endDateState } from '../../atom';
import Information from './components/Information';
import Review from './components/Review';
import RoomGuide from './components/RoomGuide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import * as S from './Detail.styled';
import EventModal from './components/EventModal';
import SubjectSlide from './components/SubjectSlide';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [info, setInfo] = useRecoilState(reservInfoState);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const [openModal, setOpenModal] = useState(false);
  const [showData, setShowData] = useState();
  const [component, setComponent] = useState(1);

  const param = useParams().id;

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
      // .get(`http://localhost:8000/detail/${id}`)
      .then((res) => {
        setShowData(res.data.roomTypeData);
        setInfo({
          ...info,
          name: res.data.roomTypeData.name,
        });
        console.log('놔', res);
      })
      .catch((err) => {
        console.log('뭐지', err);
      });
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
              <Review />
            )}
          </S.Context>
        </S.DetailExplanation>
      )}
    </>
  );
};

export default Detail;
