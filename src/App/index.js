import React from 'react';
import { withRouter } from 'react-router-dom';
import Background from '../Background';
import Header from '../Header';
import MainView from '../MainView';
import Navigation from '../Navigation';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { history } = this.props
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      history.push(route);
    }
  }
  render() {
    return (
      <div className="app">
        <Background />
        <Header />
        <Navigation />
        <MainView />
      </div>
    );
  }
};

export default withRouter(App);