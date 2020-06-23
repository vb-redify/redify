import React from 'react';
import PropTypes from 'prop-types';
import './song.styles.css';

const Song = ({ song }) => (
  <div className="song-container">
    {song.title}
  </div>
);

Song.propTypes = {
  song: PropTypes.shape({
    id: String,
    title: String,
  }).isRequired,
};

export default Song;
