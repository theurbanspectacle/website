import axios from 'axios';
import React from 'react';
import PortfolioItem from '../PortfolioItem';
import './Portfolio.css';

export default class Portfolio extends React.Component {
  items = [];

  componentDidMount() {
    axios.get('/assets/api/portfolio.json').then(response => {
      this.items = response.data;
      this.setState({});
    }).catch(error => {
      console.error('Unable to get Portfolio', error);
    })
  }

  render() {
    return (
      <div className="portfolio">
        {this.items.map((item, index) => <PortfolioItem key={index} item={item} />)}
      </div>
    );
  }
};
