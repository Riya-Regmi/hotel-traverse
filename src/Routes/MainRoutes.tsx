import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from '../Container/Container';

type MainRoutesProps = {};

export const MainRoutes = ({}: MainRoutesProps) => (
  <Routes>
    <Route
      path='/'
      element={<Container />}
    ></Route>
  </Routes>
);
