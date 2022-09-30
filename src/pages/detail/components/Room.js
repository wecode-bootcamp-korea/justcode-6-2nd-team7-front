import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { startDateState, endDateState, reservInfoState } from '../../../atom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import Slide from './Slide';
import UseModal from './UseModal';

import * as S from './Room.styled';

const Room = ({ roomType }) => {
  const navigate = useNavigate();
  const [startDate] = useRecoilState(startDateState);
  const [endDate] = useRecoilState(endDateState);
  const [info, setInfo] = useRecoilState(reservInfoState);
  const [openBtn, setOpenBtn] = useState(false);
  const [useBtn, setUseBtn] = useState(false);
  const [period, setPeriod] = useState(1);

  useEffect(() => {
    endDate && setPeriod(Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  const handleToggleBtn = () => {
    setOpenBtn((openBtn) => !openBtn);
  };

  const handleUseBtn = () => {
    setUseBtn(true);
  };

  const handleResrvBtn = () => {
    navigate('/reservation');
    window.scrollTo({
      top: 0,
    });
    setInfo({
      ...info,
      roomType: roomType.type,
      totalPrice: roomType.price * period,
    });
  };
  return (
    <>
      {roomType.image.length !== 0 && (
        <S.RoomType>
          <div className='flex'>
            <div>
              <div>
                <img alt='room-img' className='img-size' src={roomType.image[0].url} />

                <FontAwesomeIcon icon={faImages} className='icon-style' onClick={() => handleToggleBtn(true)} />
              </div>
            </div>
            <div>
              <strong className='subject'>{roomType.type}</strong>
              <div className='remain'>남은객실 {roomType.remain}개</div>
              <div className='flex underline-style'>
                <strong>가격</strong>
                {roomType.price !== null && (
                  <strong className='font-style'>
                    {roomType.price.toLocaleString()}원{period >= 2 && `/${period}박`}
                  </strong>
                )}
              </div>
              <div className='flex-btn'>
                <button className='use-button' onClick={handleUseBtn}>
                  객실 이용안내
                </button>
                <FontAwesomeIcon icon={faAngleRight} />
                {useBtn && (
                  <UseModal
                    open={useBtn}
                    onClose={() => {
                      setUseBtn(false);
                    }}
                  />
                )}
              </div>
              <div>
                <button className='reservation-button' onClick={endDate && handleResrvBtn}>
                  예약{period >= 2 && ` | ${(period * roomType.price).toLocaleString()}원 (${period}박)`}
                </button>
              </div>
            </div>
          </div>
        </S.RoomType>
      )}
      <div>{openBtn === true ? <Slide images={roomType.image} /> : null}</div>
    </>
  );
};

export default Room;
