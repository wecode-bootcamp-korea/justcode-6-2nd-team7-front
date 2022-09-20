import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// 상세페이지

import DetailPage from './pages/detailpage/DetailPage';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/detailPage' element={<DetailPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
