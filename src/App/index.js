import React from 'react';
import Background from '../Background';
import Header from '../Header';
import MainView from '../MainView';
import Navigation from '../Navigation';
import './App.css';

export default class App extends React.Component {
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