import React from 'react';
import PropTypes from 'prop-types';
import './playlist-image.styles.scss';

import { ReactComponent as Image } from '../../assets/icons/heart.svg';

const PlaylistImage = ({ title, imageUrl }) => {
  const styles = {
    height: '35px',
    width: '35px',
    fill: 'white',
  };

  return (
    <div className="playlist-image-container">
      {title !== undefined && imageUrl !== undefined ? (
        <div>
          <img className="playlist-image" src={imageUrl} alt="Playlist" />
        </div>
      ) : (
        <div className="playlist-liked-songs">
          <Image style={styles} />
        </div>
      )}
    </div>
  );
};

PlaylistImage.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
};
PlaylistImage.defaultProps = {
  title: undefined,
  imageUrl: undefined,
};

export default PlaylistImage;
