import { useState, useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Main = styled.div`
  margin: 0 auto;
  width: 848px;
  height: 160px;
  .mapDetail {
    width: 100%;
    height: 100%;
  }
`;

const Map = ({ list, map }) => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(map.lat, map.lng),
      level: 3,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(map.lat, map.lng),
    });
    marker.setMap(kakaoMap);
  }, [list]);

  return (
    <Main>
      <div id='map' className='mapDetail' />
    </Main>
  );
};

export default Map;
