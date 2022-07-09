import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from 'router';
import Color from 'color';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme(Color);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);