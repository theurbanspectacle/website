import React from 'react';
import { withRouter } from 'react-router-dom';
import Background from '../Background';
import Header from '../Header';
import MainView from '../MainView';
import Navigation from '../Navigation';
import './App.css';

class App extends React.Component {
  handleScrollCheck = () => {
    const wrapper = document.querySelector('.wrapper');
    const mainView = document.querySelector('.main-view');
    if (wrapper && mainView) {
      if (mainView.scrollHeight > mainView.clientHeight || wrapper.scrollHeight > wrapper.clientHeight) {
        wrapper.classList.add('needs-scrolling');
      } else {
        wrapper.classList.remove('needs-scrolling');
      }
    } else {
      console.warn('Unable to find wrapper.', {wrapper, mainView});
    }
  };

  handleWindowHeight = () => {
    const doc = document.body;
    doc.style.setProperty('height', `${window.innerHeight}px`);
    this.handleScrollCheck();
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
    });

    // Watch route changes
    history.listen(() => {
      this.handleScrollCheck();
    })
  }

  render() {
    return (
      <div className="app">
        <Background />
        <div className="content-wrapper">
          <Header />
          <div className="wrapper">
            <Navigation />
            <MainView />
          </div>
        </div>  
      </div>
    );
  }
};

export default withRouter(App);