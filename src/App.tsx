import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import history from './services/history';
import Routes from './routes';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Router history={history}>
        <GlobalStyles />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
