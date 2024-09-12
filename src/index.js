import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// chakra ui provider
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme,ColorModeScript } from '@chakra-ui/react';
import '@fontsource/space-grotesk'


import Contact from './pages/Contact';
import Launches from './pages/Launches';

import { Box } from '@chakra-ui/react';
import Background from './assets/images/Background2.png';
import Footer from './layouts/Footer';


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts:{
    heading:`'Berkeley Mono','monospace'`,
    body:`'Berkeley Mono','monospace'`,
  },
  config,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Box backgroundImage={Background} backgroundSize="cover" backgroundPosition="center" h='100vh' overflowY='scroll'>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/launches" element={<Launches/>} />
      </Routes>
    </BrowserRouter>
    </Box>
   
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
