import React from 'react';
//import {withRouter} from 'react-router-dom'
import MainRouter from './MainRouter';
import { BrowserRouter} from 'react-router-dom';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
        <MainRouter />
    </BrowserRouter>
  );
}

export default App;
