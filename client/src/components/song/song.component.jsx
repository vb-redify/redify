import React from 'react';
import PropTypes from 'prop-types';
import './song.styles.css';

const Song = ({ song }) => (
  <div className="song-container">
    <div className="song-play">
      <img src="./images/music.svg" alt="Play" />
    </div>
    <div className="song-details">
      <div>{song.title}</div>
      <div className="song-artist-album">
        {song.explicit}
        {song.artist}
        <span> &middot; </span>
        {song.album}
      </div>
    </div>
    <div>
      {song.minutes}:{song.seconds}
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
