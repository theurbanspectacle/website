import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
  navClick = (page) => {
    const { history } = this.props
    history.push(page);
  };

  getContent(route, name) {
    const {location} = this.props;

    if (location.pathname === route) {
      return <div className="btn-transform">&#10059;</div>;
    }

    return <button className="nav-btn" type="button" onClick={() => this.navClick(route)}>{name}</button>;
  }

  render() {
    return (
      <div className="navigation">
        {this.getContent('/', 'Home')}
        {this.getContent('/portfolio', 'Portfolio')}
        {this.getContent('/resume', 'Resume')}
        {this.getContent('/contact', 'Contact')}
      </div>
    );
  }
};

export default withRouter(Navigation);