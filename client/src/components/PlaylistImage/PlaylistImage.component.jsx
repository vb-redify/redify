import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../assets/icons/heart.svg';
import './PlaylistImage.styles.css';

const PlaylistImage = ({ title, imageUrl }) => (
  <div className="playlist-header-image-container">
    {title !== undefined && imageUrl !== undefined ? (
      <div>
        <img className="playlist-image" src={imageUrl} alt="Playlist" />
      </div>
    ) : (
      <div className="playlist-liked-songs"><img src={heart} alt="Heart" /></div>
    )}
  </div>
);

PlaylistImage.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};
PlaylistImage.defaultProps = {
  title: undefined,
  imageUrl: undefined
};

export default PlaylistImage;
