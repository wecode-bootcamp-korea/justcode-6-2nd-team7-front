import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const { kakao } = window;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .x-icon {
      color: #fff;
      transform: translateX(0.8em);
      cursor: pointer;
    }

    .mapDetail {
      width: 800px;
      height: 600px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }
`;

const Map = ({ setShowModal }) => {
  const handleShowModal = (e) => {
    e.target.id !== 'map' ? setShowModal(false) : setShowModal(true);
  };
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(35.624915, 127.151226),
  //     level: 13,
  //   };
  //   const kakaoMap = new kakao.maps.Map(container, options);

  //   list &&
  //     list.forEach((el) => {
  //       new kakao.maps.Marker({
  //         map: kakaoMap,
  //         position: new kakao.maps.LatLng(el.lat, el.lng),
  //         title: el.name,
  //       });
  //     });
  // }, [list]);

  return (
    <Main onClick={handleShowModal}>
      <div className='container'>
        <FontAwesomeIcon icon={faXmark} className='x-icon' size='3x' />
        <div id='map' className='mapDetail' />
      </div>
    </Main>
  );
};

export default Map;
