import React from 'react';

const ImgurAlbum = React.createClass({
  render() {
    return (
      <div className="main">
        Album Id: {this.props.albumId}
      </div>
    );
  }
});

module.exports = ImgurAlbum;
