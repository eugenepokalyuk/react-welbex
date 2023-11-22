import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { DEFAULT_PATH, ERROR_PATH } from '../../utils/routePath';
import { HomePage } from '../../pages/HomePage/HomePage';
import { NotFound } from '../../pages/NotFound/NotFound';
import AppFooter from '../AppFooter/AppFooter';

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path={DEFAULT_PATH} element={<HomePage />} />
        <Route path={ERROR_PATH} element={<NotFound />} />
      </Routes>
      <AppFooter />
    </>
  );
};

export default App;