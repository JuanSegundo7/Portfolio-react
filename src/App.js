import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';

/**** Icons ****/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faSun, faCircleCheck, faLanguage, faXmark, faBolt} from '@fortawesome/free-solid-svg-icons'

library.add(fas, faSun, faCircleCheck, faLanguage, faXmark, faBolt)



function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
          <Home />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
