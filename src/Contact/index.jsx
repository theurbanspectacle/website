import React from 'react';
import './Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSBmUqFku_Ta8YkIQ3FO1C82Yb2f5nyx1rN_fFLSWp_oNylQ/viewform?embedded=true" className='contact-field' title='contact'>Loading…</iframe>
      </div>
    );
  }
};
