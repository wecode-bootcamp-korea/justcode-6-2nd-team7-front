import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/accommodation/AccommodationList';
import { ThemeProvider } from 'styled-components';

import Nav from './component/nav/Nav';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import PhoneCheck from './pages/signup/PhoneCheck';
import SignUp from './pages/signup/SignUp';
import SignUpPage from './pages/signup/SignUpPage';
import DetailPage from './pages/detailpage/DetailPage';
import Reservation from './pages/reservation/Reservation';
import Points from './pages/mypage/components/Points';
import Coupons from './pages/mypage/components/Coupons';
import ReservationList from './pages/mypage/components/ReservationList';
import My from './pages/mypage/components/My';
import Footer from './component/footer/Footer';

import theme from './styles/theme';
import { browserWidth, reponsive } from './styles/responsive';
import TopButton from './component/topbutton/TopButton';
import KaKaoLogin from './pages/login/KaKaoLogin';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme} responsive={{ browserWidth, reponsive }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/kakao-login' element={<KaKaoLogin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-check' element={<PhoneCheck />} />
          <Route path='/signup-page' element={<SignUpPage />} />
          <Route path='/detailPage' element={<DetailPage />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/accommodation/:type' element={<AccommodationList />} />
          <Route path='/mypage' element={<Points />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/reservation-list' element={<ReservationList />} />
          <Route path='/my' element={<My />} />
        </Routes>
        <Footer />
        <TopButton />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
