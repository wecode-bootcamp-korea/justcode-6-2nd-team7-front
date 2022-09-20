import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/list/List';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/category' element={<List />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
