import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/screen';
import { Tier } from './pages/Tier/screen';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { reset } from 'styled-reset';
import { Reference } from './pages/Reference/screen';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
    
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    overflow-x: hidden;
  }
  a {
      text-decoration:none;
      color:inherit;
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tier" element={<Tier />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
