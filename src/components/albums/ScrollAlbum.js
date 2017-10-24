import React from 'react';
import Gallery from 'react-photo-gallery';

const ScrollAlbum = (props) => {
    return (
      <div className='album'>
        <div className='separator-top'></div>
        <div className='separator-bottom'></div>
        <div className='images'>
          <Gallery photos={props.images.map(i =>
            Object.assign({}, i, {
              src: i.link,
              aspectRatio: (i.width / i.height)
            }))}
            disableLightbox />
        </div>
      </div>
    );
  }

export default ScrollAlbum;
