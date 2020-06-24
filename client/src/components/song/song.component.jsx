import * as React from 'react';
import PropTypes from 'prop-types';
import './song.styles.css';

  // const [songImage, setSongImage] = useState('music');

  // return (
    // <div
      // className="song-container"
      // onMouseOver={() => setSongImage('play')}
      // onFocus={() => setSongImage('play')}
      // onMouseOut={() => setSongImage('music')}
      // onBlur={() => setSongImage('music')}
    // >
      // <div className="song-play">
        {/* <img src={`./images/${songImage}.svg`} alt="Play" /> */}
      {/* </div> */}

const Song = ({ song }) => {
  const [songImage, setSongImage] = React.useState('music');
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
        <div>{song.title}</div>
        <div className="song-artist-album">
          {song.explicit}
          {song.artist}
          <span> &middot; </span>
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
