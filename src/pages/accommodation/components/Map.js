import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { returnHtml } from '../data/functions';

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

const Map = ({ setShowModal, list }) => {
  const mapEl = useRef();
  const handleShowModal = (e) => {
    !mapEl.current.contains(e.target) ? setShowModal(false) : setShowModal(true);
  };

  useEffect(() => {
    const newlist =
      list &&
      Object.keys(list)
        .map((region) => {
          return list[region].map((el) => {
            return { name: el.name, lat: el.lat, lng: el.lng, saleprice: el.saleprice, img: el.img };
          });
        })
        .flat();

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.504897, 127.04961),
      level: 6,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const makeOverListener = (map, marker, infowindow) => {
      return () => {
        infowindow.open(kakaoMap, marker);
      };
    };

    const makeOutListener = (infowindow) => {
      return () => {
        infowindow.close();
      };
    };

    newlist &&
      newlist.forEach((el) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(el.lat, el.lng),
        });
        marker.setMap(kakaoMap);

        const content = returnHtml(el.name, el.img, el.saleprice);
        const infowindow = new kakao.maps.InfoWindow({
          position: new kakao.maps.LatLng(el.lat, el.lng),
          content: content,
        });

        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(kakaoMap, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      });
  }, [list]);

  return (
    <Main onClick={handleShowModal}>
      <div className='container'>
        <FontAwesomeIcon icon={faXmark} className='x-icon' size='3x' />
        <div id='map' className='mapDetail' ref={mapEl} />
      </div>
    </Main>
  );
};

export default Map;
