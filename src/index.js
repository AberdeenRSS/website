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

import Projects from './pages/Projects';

import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';
import Launches from './pages/Launches';
import SolidRockets from './pages/SolidRockets';


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
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />

        
        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/solid-rockets" element={<SolidRockets />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/launches" element={<Launches/>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
