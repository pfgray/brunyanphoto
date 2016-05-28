import React from 'react/addons';

import ImageService from '../images/ImageService.js';
import logo from '../../images/brp_logo_white.png';

const images = [
  require('../../images/scrolling/image1.jpg'),
  require('../../images/scrolling/image2.jpg')
];

const Front = React.createClass({
  getInitialState() {
    return {
      currentImage: 0
    };
  },
  componentDidMount() {
    setInterval(this.shiftImage, 5000);
    ImageService.getLandscapeImages()
      .then(a => {
        console.log('woot!, got album: ', a.images);
        a.images
          .map(image => image.link)
          .forEach(url => images.push(url));
      });
  },
  shiftImage() {
    console.log('shifting images:', images);
    if(images.length > 0) {
      this.setState({
        currentImage: (this.state.currentImage + 1) % images.length
      });
    }
  },
  render() {

    const wallpapers = images.map((image, i) => {
      const style = {
        opacity: this.state.currentImage === i ? 1 : 0,
        backgroundImage: 'url(' + image + ')'
      };
      return (<div className="wallpaper" style={style}></div>);
    });

    return (
      <div className="front">
        {wallpapers}
        <div className="overlay">
          <div className='social'>
            <a href='https://www.facebook.com/BethanneRunyanPhotography'>
              <i className='fa fa-facebook-official'></i>
            </a>
            <a href='https://instagram.com/bethannerunyan/'>
              <i className='fa fa-instagram'></i>
            </a>
          </div>
          <div className='logo'>
            <img className='logo' src={logo} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Front;
