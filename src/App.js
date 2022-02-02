import './App.css';
import React from 'react';
import Header1 from './components/headers/header1';
import Header2 from './components/headers/header2';
import HeaderMobo from './components/headers/headermobo';
import { useMediaQuery } from '@chakra-ui/react'

function App() {

  const [isLargerThan780] = useMediaQuery('(min-width: 780px)')


  return (
    <>
      {isLargerThan780 ? <Header2 /> : <Header1 />}
      <HeaderMobo></HeaderMobo>
    </>
  );
}

export default App;
