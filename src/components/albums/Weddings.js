import React from 'react';
import ScrollAlbum from './ScrollAlbum';

const Weddings = () => (
  <ScrollAlbum
    title="Weddings"
    album={window.app_config.imgur.main_album} />
);

export default Weddings;
