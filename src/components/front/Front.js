import React from 'react/addons';
import Q from 'q';

import ImageService from '../images/ImageService.js';
import logo from '../../images/brp_logo_white.png';

const FadeDuration = 2000; // ms
const SwitchInterval = 1000; // ms

const getWallpaperStyleForUrl = (image, text, fading) => {
  if(!image) {
    return null;
  }
  const style = {
    opacity: fading ? 0 : 1,
    transition: fading ? 'opacity ' + FadeDuration + 'ms ease-out' : 'none',
    backgroundImage: 'url(' + image + ')'
  };
  return <div className="wallpaper" style={style}>
    <h1 style={{ color: 'white' }}>{text}</h1></div>;
};

const Front = React.createClass({
  getInitialState() {
    return {
      frontImage: null,
      backImage: null,
      fading: false,
      landscapeImages: [],
      portraitImages: []
    };
  },
  componentDidMount() {
    // render the first two images...
    // asyncly change the first image...
    //   set frontImage to fading,
    //   back Image to fading in
    // in 5000 ms, switch the photos and repeat
    Q.all([ImageService.getLandscapeAlbum(), ImageService.getPortraitAlbum()])
    .spread((landscape, portrait) => {
      console.log('got albums: ', landscape, portrait);
      this.setState({
        frontImage: portrait.images.map(i => i.link)[0],
        backImage: portrait.images.map(i => i.link)[1],
        landscapeImages: portrait.images.map(i => i.link),
        portraitImages: landscape.images.map(i => i.link)
      });
      this.shiftImage();
    });
  },
  shiftImage() {
    // change front Image to fade
    console.log('shifting image: ', this.state);
    this.setState({
      fading: true
    });
    setTimeout(() => {
      console.log('resetting...', this.state);
      this.setState({
        frontImage: this.state.backImage,
        backImage: this.state.frontImage,
        fading: false
      });
      setTimeout(this.shiftImage, SwitchInterval);
    }, FadeDuration);
  },
  render() {

    const wallpapers = [
      getWallpaperStyleForUrl(this.state.backImage, 'Back Image'),
      getWallpaperStyleForUrl(this.state.frontImage, 'Front Image', this.state.fading)
    ];

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
