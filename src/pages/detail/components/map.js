import { useState, useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Main = styled.div`
  // 원하는 css 스타일링
  margin: 0 auto;
  width: 848px;
  height: 160px;
  .mapDetail {
    // 원하는 css 스타일링
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
      // center: new kakao.maps.LatLng(37.504897, 127.04961),
      // level: 6,
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
