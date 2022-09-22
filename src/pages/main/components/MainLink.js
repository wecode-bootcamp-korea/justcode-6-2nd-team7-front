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
            <img src='images/main/icon/motel.png' />
            모텔
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='images/main/icon/hotel.png' />
            호텔•리조트
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='images/main/icon/pension.png' />
            펜션
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='images/main/icon/ghestHouse.png' />
            게스트하우스
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='images/main/icon/camping.png' />
            캠핑•글램핑
          </Link>
        </li>
        <li>
          <Link to='/accommodation/'>
            <img src='images/main/icon/hanok.png' />
            한옥
          </Link>
        </li>
        <li>
          <Link to='/my'>
            <img src='images/main/icon/my.png' />
            내주변
          </Link>
        </li>
        <li>
          <Link to=''>
            <img src='/images/main/icon/sale.png' />
            페이백
          </Link>
        </li>
      </ul>
    </MainLinkContainer>
  );
};

export default MainLink;
