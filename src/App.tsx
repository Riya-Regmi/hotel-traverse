import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './Routes/MainRoutes';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
        <MainRoutes />
      </HashRouter>
    </>
  );
}

export default App;
