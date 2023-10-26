import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <a href="/assets/documents/OliverExample.pdf" target="_blank" rel="noreferrer" className="link-text">
          RESUME
          <FontAwesomeIcon size='sm' icon={faSquareUpRight} />
        </a>
      </div>
    );
  }
};
