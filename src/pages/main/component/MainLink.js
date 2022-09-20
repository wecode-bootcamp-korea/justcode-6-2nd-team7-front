import React from 'react';
import styled from 'styled-components';

const MainLinkContainer = styled.div`
  display: flex;
  width: 1024px;
  margin: auto;
`;

const MainLink = () => {
  return (
    <MainLinkContainer>
      <div>모텔</div>
      <div>호텔•리조트</div>
      <div>펜션</div>
      <div>게스트하우스</div>
      <div>캠핑•글램핑</div>
      <div>한옥</div>
      <div>내주변</div>
      <div>페이백</div>
    </MainLinkContainer>
  );
};

export default MainLink;
