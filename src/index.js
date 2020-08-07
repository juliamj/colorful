import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {Grommet} from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Times New Roman',
      size: '14px'
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);