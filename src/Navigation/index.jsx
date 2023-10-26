import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

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
        <div className="navigation-items">
          {this.getContent('/', 'Home')}
          {this.getContent('/portfolio', 'Portfolio')}
          {this.getContent('/resume', 'Resume')}
          {this.getContent('/contact', 'Contact')}
        </div>
        <div className='navigation-socials'>
          <a href="https://github.com/theurbanspectacle" className="navigation-social-links" rel="noreferrer" target="_blank" title='GitHub'><FontAwesomeIcon size='xl' icon={faSquareGithub} /></a>
          <a href="https://linkedin.com/in/genesisgregorio" className="navigation-social-links" rel="noreferrer" target="_blank" title='LinkedIn'><FontAwesomeIcon size='xl' icon={faLinkedin} /></a>
          <a href="https://instagram.com/theurbanspectacle" className="navigation-social-links" rel="noreferrer" target="_blank" title='Instagram'><FontAwesomeIcon size='xl' icon={faSquareInstagram} /></a>
        </div>
      </div>
    );
  }
};

export default withRouter(Navigation);