import React from 'react';
import './Resume.css';

export default class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
      <iframe src="/assets/documents/OliverExample.pdf" className='oliver-resume' title='resume' />
      </div>
    );
  }
};
