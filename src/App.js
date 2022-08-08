import React from 'react';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles, light, dark } from "./styles/GlobalStyles";


/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faSun, faCircleCheck, faLanguage, faXmark, faBolt, faMoon} from '@fortawesome/free-solid-svg-icons'

library.add(fas, faSun, faCircleCheck, faLanguage, faXmark, faBolt, faMoon)



function App() {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? light : dark;
  const Container = styled.div``;

  return (
    <ThemeProvider theme={themeMode}>
    <Container>
      <GlobalStyles />
      <Router>
        <Header theme={theme} toggleTheme={toggleTheme}/>
          <Home />
        <Footer />
      </Router>
    </Container>
    </ThemeProvider>
  );
}

export default App;
