import React from 'react';
import ImageService from '../images/ImageService';
import Gallery from 'react-photo-gallery';

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
      });
    });
  },
  render() {
    const images = this.state.loading ?
        <div>loading...</div> :
        <Gallery photos={this.state.album.images.map(i =>
            Object.assign({}, i, {
              src: i.link,
              aspectRatio: (i.width / i.height)
            }))}
            disableLightbox />
        // this.state.album.images.map(image => (
        //   <img src={image.link} key={image.link} />
        // ));

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

export function createScrollAlbum(title, album) {
  return () => <ScrollAlbum title={title} album={album} />;
}

export default ScrollAlbum;
