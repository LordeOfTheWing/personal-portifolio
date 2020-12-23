import React from 'react';
//Importing the global style
import GlobalStyle from './components/GlobalStyle';

//Importing Pages
import AboutMe from '../src/pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from '../src/pages/ContactMe';
import MyWork from '../src/pages/MyWork';
//Router
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe/>
        </Route>

        <Route path="/work">
          <MyWork/>
        </Route>

        <Route path="/contact">
          <ContactMe/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
