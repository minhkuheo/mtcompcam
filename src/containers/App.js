import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../util/styles/main_css/stylesheet.css';
import { Switch, Route } from 'react-router-dom';
import * as PATHS from '../util/contants/RouteContants';

import MainMenu from './Main_Menu';
import Footer from './Footer';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainMenu />
        </header>

        <body className="Body">
          <Switch>
            <Route path={PATHS.LANDING_PAGE} component={LandingPage} />
          </Switch>
        </body>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
