import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login/Login';
import PhoneCheck from './pages/SignUp/PhoneCheck';
import SignUp from './pages/SignUp/SignUp';
import SignUpPage from './pages/SignUp/SignUpPage';
import DetailPage from './pages/detailpage/DetailPage';


import theme from './styles/theme';




const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/detailPage' element={<DetailPage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-check' element={<PhoneCheck />} />
          <Route path='/signup-page' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
