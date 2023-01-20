import React from 'react';
import './MainView.css';
import { Switch, Route, withRouter } from "react-router-dom";
import AboutMe from '../AboutMe';

class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <Switch>
          <Route exact={true} path="/">
            <AboutMe />
          </Route>
          <Route path="/portfolio"></Route>
          <Route path="/resume"></Route>
          <Route path="/contact"></Route>
          <Route path="*">404</Route>
        </Switch>
      </div>
    );
  }
};

export default withRouter(MainView);