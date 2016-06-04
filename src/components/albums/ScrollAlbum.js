import React from 'react';
import ImageService from '../images/ImageService';

const ScrollAlbum = React.createClass({
  getInitialState() {
    return {
      loading: true,
      album: null
    };
  },
  componentDidMount() {
    ImageService.getAlbum(this.props.album)
    .then(album => {
      console.log("got album: ", album);
      this.setState({
        loading: false,
        album
      })
    });
  },
  render() {
    const images = this.state.loading ?
        <div>loading...</div> :
        this.state.album.images.map(image => (
          <img src={image.link} key={image.link} />
        ));

    return (
      <div className='album'>
        <h1>{this.props.title}</h1>
        <div className='separator-top'></div>
        <div className='separator-bottom'></div>
        <div className='images'>
          {images}
        </div>
      </div>
    );
  }
});

export default ScrollAlbum;
