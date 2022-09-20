import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainLinkContainer = styled.div`
  width: 1024px;
  margin: auto;

  .link-list {
    display: flex;
    justify-content: space-between;
  }
`;

const MainLink = () => {
  return (
    <MainLinkContainer>
      <ul className='link-list'>
        <li>
          <Link>모텔</Link>
        </li>
        <li>
          <Link>호텔•리조트</Link>
        </li>
        <li>
          <Link>펜션</Link>
        </li>
        <li>
          <Link>게스트하우스</Link>
        </li>
        <li>
          <Link>캠핑•글램핑</Link>
        </li>
        <li>
          <Link>한옥</Link>
        </li>
        <li>
          <Link>내주변</Link>
        </li>
        <li>
          <Link>페이백</Link>
        </li>
      </ul>
    </MainLinkContainer>
  );
};

export default MainLink;
