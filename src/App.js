import './App.css';
import React, { useState } from 'react';
import Header1 from './components/headers/header1';
import Header2 from './components/headers/header2';
import HeaderMobo from './components/headers/headermobo';
import Body from './components/body/body.js';
import { useMediaQuery } from '@chakra-ui/react'
import Navbuttons from './components/body/navbuttons';

function App() {

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


  const [BgColor, setBgColor] = useState( )
  const ChangeBgColor = () => {
    setBgColor(isLargerThan768 ? 'white' : 'black')
  }

  return (
    <>
      {isLargerThan768 ? <Header2 /> : <Header1 />}
      <Navbuttons></Navbuttons>
      <Body></Body>
    </>
  );
}

export default App;
