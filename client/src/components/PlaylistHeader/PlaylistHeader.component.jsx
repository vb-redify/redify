import React from 'react';
import PropTypes from 'prop-types';

import './PlaylistHeader.styles.css';

const PlaylistHeader = ({ children }) => (
  <div className="playlist-header-container">
    <div className="playlist-header-image-container">This is the image</div>
    <div className="playlist-header-details-container">
      <div className="playlist-header-headline">Playlist</div>
      <div className="playlist-header-title">{children}</div>
      <div>The duration of all songs</div>
    </div>
  </div>
);

PlaylistHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PlaylistHeader;
