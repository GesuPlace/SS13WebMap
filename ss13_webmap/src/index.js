import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Announcements from './modules/Announcements';
import Builds from './modules/Builds';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Announcements />
      <Builds />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
