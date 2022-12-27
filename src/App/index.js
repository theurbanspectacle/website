import React from 'react';
import Background from '../Background';
import Header from '../Header';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Background />
        <Header />
      </div>
        
    );
  }
};