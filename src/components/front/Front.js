import React from 'react/addons';
import Q from 'q';

import ImageService from '../images/ImageService.js';
import logo from '../../images/brp_logo_white.png';

const landscapeImages = [];
const portraitImages = [];

const Front = React.createClass({
  getInitialState() {
    return {
      currentImage: 0
    };
  },
  componentDidMount() {
    Q.all([ImageService.getLandscapeAlbum(), ImageService.getPortraitAlbum()])
    .spread((landscape, portrait) => {
      console.log('got albums: ', landscape, portrait);

      portrait.images
        .map(image => image.link)
        .forEach(url => portraitImages.push(url));
      landscape.images
        .map(image => image.link)
        .forEach(url => landscapeImages.push(url));
      this.shiftImage();
      setInterval(this.shiftImage, 5000);
    });
    // ImageService.getLandscapeImages()
    //   .then(a => {
    //
    //   });
  },
  shiftImage() {
    console.log('shifting images:', landscapeImages);
    if(images.length > 0) {
      this.setState({
        currentImage: (this.state.currentImage + 1) % images.length
      });
    }
  },
  render() {
    // oh, this is why they all load together...
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
