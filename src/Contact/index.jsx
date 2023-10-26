import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <a href="https://forms.gle/FKC8YM7vAnffsNnt6" target="_blank" rel="noreferrer" className="link-text">
          CONTACT
          <FontAwesomeIcon size='sm' icon={faSquareUpRight} />
        </a>
      </div>
    );
  }
};
