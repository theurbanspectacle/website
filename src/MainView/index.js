import React from 'react';
import './MainView.css';
import { Switch, Route, withRouter } from "react-router-dom";
import AboutMe from '../AboutMe';
import Resume from '../Resume';
import Contact from '../Contact';
import Portfolio from '../Portfolio';

class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <Switch>
          <Route exact={true} path="/">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </div>
    );
  }
};

export default withRouter(MainView);