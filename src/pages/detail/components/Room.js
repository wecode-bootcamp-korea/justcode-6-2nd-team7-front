import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import * as S from './Room.styled';
import { useState } from 'react';
import Slide from './Slide';
import UseModal from './UseModal';

const Room = ({ roomType }) => {
  const [openBtn, setOpenBtn] = useState(false);
  const [useBtn, setUseBtn] = useState(false);

  const handleToggleBtn = () => {
    setOpenBtn((openBtn) => !openBtn);
  };

  const handleUseBtn = () => {
    setUseBtn(true);
  };

  return (
    <>
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
              <strong className='font-style'>{roomType.price}원</strong>
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
              <button className='reservation-button'>예약</button>
            </div>
          </div>
        </div>
      </S.RoomType>
      <div>{openBtn === true ? <Slide images={roomType.image} /> : null}</div>
    </>
  );
};

export default Room;
