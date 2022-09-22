import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from './component/nav/Nav';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import PhoneCheck from './pages/signup/PhoneCheck';
import SignUp from './pages/signup/SignUp';
import SignUpPage from './pages/signup/SignUpPage';
import DetailPage from './pages/detailpage/DetailPage';
import Points from './pages/mypage/components/Points';
import Coupons from './pages/mypage/components/Coupons';
import Reservation from './pages/mypage/components/Reservation';
import My from './pages/mypage/components/My';
import Footer from './component/footer/Footer';

import theme from './styles/theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-check' element={<PhoneCheck />} />
          <Route path='/signup-page' element={<SignUpPage />} />
          <Route path='/detailPage' element={<DetailPage />} />
          <Route path='/mypage' element={<Points />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/reservations' element={<Reservation />} />
          <Route path='/my' element={<My />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
