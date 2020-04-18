import React from 'react';
//import {withRouter} from 'react-router-dom'
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <MainRouter />
    </BrowserRouter>
  );
}

export default App;
