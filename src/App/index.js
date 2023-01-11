import React from 'react';
import { withRouter } from 'react-router-dom';
import Background from '../Background';
import Header from '../Header';
import MainView from '../MainView';
import Navigation from '../Navigation';
import './App.css';

class App extends React.Component {
  handleWindowHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  };

  componentDidMount() {
    const { history } = this.props
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      history.push(route);
    }

    window.addEventListener('resize', this.handleWindowHeight);
    window.dispatchEvent(new Event('resize'));
    // Trigger resize to clean up particles
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1500);
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