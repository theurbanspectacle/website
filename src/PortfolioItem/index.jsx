import React from 'react';
import './PortfolioItem.css';

export default class PortfolioItem extends React.Component {

  render() {
    const {item} = this.props;
  
    return (
      <div className='portfolio-item'>
        <a href={item.github} target='_blank' rel="noreferrer" className="portfolio-link">
          {item.title}
          <span className="asterisk">&#10059;</span>
        </a>
      </div>
    );
  }
};
