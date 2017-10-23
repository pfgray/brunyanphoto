import React from 'react';
import Q from 'q';
import PortfolioLink from './PortfolioLink';

const ALBUMS = window.app_config.portfolio;
// go get each album, then create links for them.

const Portfolio = React.createClass({
  render() {
    
    return (
      <div className="portfolio">
        {ALBUMS.map(a => (
          <PortfolioLink {...a} cover={a.front.link} key={a.link}/>
        ))}
      </div>
    );
  }
});

export default Portfolio;
