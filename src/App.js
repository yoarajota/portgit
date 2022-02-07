import './App.css';
import React, { useEffect, useState } from 'react';
import Header1 from './components/headers/header1';
import Header2 from './components/headers/header2';
import HeaderMobo from './components/headers/headermobo';
import Body from './components/body/body.js';
import { useMediaQuery } from '@chakra-ui/react'
import Navbuttons from './components/body/navbuttons';

function App() {

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [isLargerThan544] = useMediaQuery('(min-width: 544px)')
  
  const [bgColor, setBgColor] = useState('#161b22')
  useEffect(() => {
    if (isLargerThan544) {
      setBgColor('#0d1117')
    }

    else {
      setBgColor('#161b22')
    }
  }, [isLargerThan544]) 

  return (
    <body style={{backgroundColor: bgColor}}>
      {isLargerThan768 ? <Header2 /> : <Header1 />}
      {isLargerThan768 ? <Navbuttons /> : ''}
      {isLargerThan768 ? '' : <HeaderMobo />}
      <Body></Body>
    </body>
  );
}

export default App;
