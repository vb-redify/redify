import React from 'react';
import PropTypes from 'prop-types';

import PlaylistImage from '../playlist-image/playlist-image.component';

import './playlist-header.styles.css';

const PlaylistHeader = ({ children }) => (
  <div className="playlist-header-container">
    <PlaylistImage />
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
