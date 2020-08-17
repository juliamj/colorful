import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Grommet} from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px'
    },
    breakpoints: {
      xsmall: {
        value: 375,
      },
      small: {
        value: 568,
        
      },
      medium: {
        value: 768,
        
      },
      large: {
        value: 1024,
        
      },
      xlarge: {
        value: 1366,
        
      }
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
    <Router>
      <App />
      </Router>
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);