import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainLinkContainer = styled.div`
  width: 924px;
  margin: 32px auto;

  .link-list {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: column;
      width: 100px;
      text-align: center;
      color: ${({ theme }) => theme.colors.text};
      font-size: 18px;
      img {
        width: 60px;
        margin: 0px auto 15px;
      }
    }
  }
`;

const MainLink = () => {
  return (
    <MainLinkContainer>
      <ul className='link-list'>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/motel.png' />
            모텔
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/hotel.png' />
            호텔•리조트
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/pension.png' />
            펜션
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/ghestHouse.png' />
            게스트하우스
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/camping.png' />
            캠핑•글램핑
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='/images/main/hanok.png' />
            한옥
          </Link>
        </li>
        <li>
          <Link to='/my'>
            <img src='/images/main/my.png' />
            내주변
          </Link>
        </li>
        <li>
          <Link to=''>
            <img src='/images/main/sale.png' />
            페이백
          </Link>
        </li>
      </ul>
    </MainLinkContainer>
  );
};

export default MainLink;
