import React from 'react';

import styled from 'styled-components';

const MyModalStyle = styled.div`
  .modal {
    float: none;
  }
`;

const MyModal = () => {
  return (
    <div>
      <li className='modal'>
        <ul>내정보</ul>
        <ul>포인트</ul>
        <ul>쿠폰</ul>
        <ul>예약내역</ul>
      </li>
    </div>
  );
};

export default MyModal;
