import './App.css';
import { MainRoutes } from './Routes/MainRoutes';
import { HashRouter } from 'react-router-dom';
import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function App() {
  return (
    <HashRouter>
      <MainRoutes />
    </HashRouter>
  );
}

export default App;
