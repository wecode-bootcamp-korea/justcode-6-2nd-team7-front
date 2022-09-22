import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/accommodation/AccommodationList';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login/Login';
import PhoneCheck from './pages/signup/PhoneCheck';
import SignUp from './pages/signup/SignUp';
import SignUpPage from './pages/signup/SignUpPage';

import theme from './styles/theme';

import Nav from './component/nav/Nav';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-check' element={<PhoneCheck />} />
          <Route path='/signup-page' element={<SignUpPage />} />
          <Route path='/accommodation/:type' element={<AccommodationList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
