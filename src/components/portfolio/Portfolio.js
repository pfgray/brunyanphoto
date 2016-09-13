import React from 'react';
import Q from 'q';
import ImageService from '../images/ImageService';
import PortfolioLink from './PortfolioLink';
import { convertLink } from '../detectMobile';

const ALBUMS = window.app_config.portfolio;
// go get each album, then create links for them.

const Portfolio = React.createClass({
  getInitialState() {
    return { albums: [] };
  },
  componentDidMount() {
    Q.all(ALBUMS.map(a => ImageService.getAlbum(a.id)))
      .then(albums => {
        this.setState({
          albums: albums.map((a, i) => Object.assign({}, a, ALBUMS[i]))
        });
      });
  },
  render() {
    const albums = this.state.albums.map(a => (
      <PortfolioLink {...a} cover={convertLink(a.images[0].link)} key={a.label}/>
    ));
    return (
      <div className="portfolio">
        {albums}
      </div>
    );
  }
});

export default Portfolio;
