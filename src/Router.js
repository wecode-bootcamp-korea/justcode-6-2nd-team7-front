import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>{/* <Route path='' element={} /> */}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
