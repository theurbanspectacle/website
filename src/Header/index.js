// eslint-disable react/jsx-no-comment-textnodes
import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="title">THEURBANSPECTACLE<span className="asterisk">&#10059;</span></div>
        <div className="subtitle">Oliver Martin // Software Engineer</div>
      </div>
    );
  }
};