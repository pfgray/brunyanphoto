import React from 'react';

import Carousel from '../carousel/Carousel';
import Header from './Header';
import logo from '../../images/brphoto-white.png';
import Social from './Social';

const FadeDuration = 2000; // ms
const SwitchInterval = 3000; // ms

const getWallpaperStyleForUrl = (image, fading) => {
  if(!image) {
    return null;
  }
  const style = {
    opacity: fading ? 0 : 1,
    transition: fading ? 'opacity ' + FadeDuration + 'ms ease-out' : 'none',
    backgroundImage: 'url(' + image + ')'
  };
  return <div className="wallpaper" style={style}></div>;
};

const Front = React.createClass({
  getInitialState() {
    return {
      frontImage: null,
      backImage: null,
      fading: false
    };
  },
  componentDidMount() {
    // render the first two images...
    // asyncly change the first image...
    //   set frontImage to fading,
    //   back Image to fading in
    // in 5000 ms, switch the photos and repeat
    this.carousel = Carousel.create(window.frontImages);
    this.setState({
      frontImage: this.carousel.getNextImage(),
      backImage: this.carousel.getNextImage()
    });
    this.shiftImage();
  },
  componentWillUnmount() {
    clearTimeout(this.timeout);
  },
  shiftImage() {
    // change front Image to fade
    this.setState({
      fading: true
    });
    this.timeout = setTimeout(() => {
      this.setState({
        frontImage: this.state.backImage,
        backImage: this.carousel.getNextImage(),
        fading: false
      });
      this.timeout = setTimeout(this.shiftImage, SwitchInterval);
    }, FadeDuration);
  },
  render() {

    return (
      <div className="front">
        {getWallpaperStyleForUrl(this.state.backImage)}
        {getWallpaperStyleForUrl(this.state.frontImage, this.state.fading)}
        <div className="overlay">
          <div className='logo'>
            <img className='logo' src={logo} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Front;
