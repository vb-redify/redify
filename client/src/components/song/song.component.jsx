import * as React from 'react';
import PropTypes from 'prop-types';
import './song.styles.css';

const Song = ({ song }) => {
  const [songImage, setSongImage] = React.useState('music');
  const seconds = song.seconds.toString().padStart(2, '0');
  return (
    <div
      className="song-container"
      onMouseOver={() => setSongImage('play2')}
      onFocus={() => setSongImage('play2')}
      onMouseOut={() => setSongImage('music')}
      onBlur={() => setSongImage('music')}
    >
      <div className="song-play">
        <img src={`./images/${songImage}.svg`} alt={`${songImage}`} />
      </div>
      <div className="song-details">
        <div className="song-title">{song.title}</div>
        <div className="song-artist-album">
          {song.explicit ? <div className="song-explicit">E</div> : null}
          {song.artist}
          <span> &middot; </span>
          {song.album}
        </div>
      </div>
      <div>
        {song.minutes}
        :
        {seconds}
      </div>
    </div>
  );
};

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
