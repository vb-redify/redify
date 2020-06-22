import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './collection-item.styles.scss';

const CollectionItem = ({ currentSong: { artist, imageUrl, title } }) => (
  <div className="collection-item-container">
    <div className="collection-thumbnail">
      <img src={imageUrl} alt="music album" />
    </div>
    <div className="song-details">
      <p>
        {title}
        &nbsp; &#9825;
      </p>
      <p>{artist}</p>
    </div>
  </div>
);

const mapStateToProps = ({ likedSongs: { likedSongs } }) => ({
  currentSong: likedSongs[0],
});

CollectionItem.propTypes = {
  currentSong: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(CollectionItem);
