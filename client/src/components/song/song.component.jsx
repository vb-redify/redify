import React from 'react';
import PropTypes from 'prop-types';
import './song.styles.css';

const Song = ({ song }) => (
  <div className="song-container">
    <div>Play</div>
    <div className="song-details">
      <div>{song.title}</div>
      <div>
        {song.explicit}
        -
        {song.artist}
        -
        {song.album}
      </div>
    </div>
    <div>
      {song.minutes}
      :
      {song.seconds}
    </div>
  </div>
);

Song.propTypes = {
  song: PropTypes.shape({
    id: String,
    title: String,
    album: String,
    artist: String,
    minutes: Number,
    seconds: Number,
    explicit: Boolean,
    imageUrl: String,
  }).isRequired,
};

export default Song;
