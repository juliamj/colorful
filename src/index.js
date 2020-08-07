import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {grommet, Grommet} from 'grommet'

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
    <Grommet theme={grommet}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);