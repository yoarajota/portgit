import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './style/theme.js'
import { ScreenProvider } from './hooks/useScreen';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ScreenProvider>
        <App />
      </ScreenProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
