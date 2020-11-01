import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';
import App from './App';
import { GlobalStyle } from 'themes/createGlobalStyle';

ReactDOM.render(
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById('app') as HTMLElement
);
