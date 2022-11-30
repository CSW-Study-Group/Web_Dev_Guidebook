import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from 'module/store';
import Router from 'router';
import Color from 'color';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme(Color);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);