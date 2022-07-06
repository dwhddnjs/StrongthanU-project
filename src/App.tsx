import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/screen/Home';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
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
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
