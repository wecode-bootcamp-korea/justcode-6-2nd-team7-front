import { NavLink } from 'react-router-dom';
import * as S from './MyPage.Styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MyPage() {
  return (
    <S.LinkContainer>
      <NavLink className={({ isActive }) => (isActive ? 'points' : '')} to='/mypage'>
        포인트
      </NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'coupons' : '')} to='/coupons'>
        쿠폰함
      </NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'reservations' : '')} to='/reservation-list'>
        예약내역
      </NavLink>

      <NavLink className={({ isActive }) => (isActive ? 'my' : '')} to='/my'>
        내 정보 관리
      </NavLink>
    </S.LinkContainer>
  );
}

export default MyPage;
