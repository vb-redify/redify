import React from 'react';
import PropTypes from 'prop-types';

import './playlist-image.styles.css';

const PlaylistImage = ({ title, imageUrl }) => (
  <div className="playlist-header-image-container">
    {title !== undefined && imageUrl !== undefined ? (
      <div>
        <img className="playlist-image" src={imageUrl} alt="Playlist" />
      </div>
    ) : (
      <div className="playlist-liked-songs">
        <img src="./images/heart.svg" alt="Heart" />
      </div>
    )}
  </div>
);

PlaylistImage.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};
PlaylistImage.defaultProps = {
  title: undefined,
  imageUrl: undefined,
};

export default PlaylistImage;
