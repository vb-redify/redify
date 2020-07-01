import * as React from 'react';
import PropTypes from 'prop-types';
import './song.styles.scss';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Music } from '../../assets/icons/music.svg';
import getTime from './song.util';

const Song = ({ song }) => {
  const [songImage, setSongImage] = React.useState('music');
  const [hours, minutes, totalSeconds] = getTime(song);
  const seconds = totalSeconds.toString().padStart(2, '0');

  const styles = {
    music: {
      height: '18px',
      width: '18px',
    },
    play: {
      height: '18px',
      width: '18px',
      fill: 'white',
      stroke: 'white',
    },
  };

  return (
    <div
      className="song-container"
      onMouseOver={() => setSongImage('play')}
      onFocus={() => setSongImage('play')}
      onMouseOut={() => setSongImage('music')}
      onBlur={() => setSongImage('music')}
    >
      <div className="song-play">
        {songImage === 'music' ? (
          <Music style={styles.music} />
        ) : (
          <Play style={styles.play} />
        )}
      </div>
      <div className="song-details">
        <div className="song-title">{song.title}</div>
        <div className="song-artist-album">
          {song.explicit ? <div className="song-explicit">E</div> : null}
          <div className="song-artist">{song.artist}</div>
          <div id="spacer-dot">&middot;</div>
          <div className="song-album">{song.album}</div>
        </div>
      </div>
      <div className="song-duration">
        {hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`}
      </div>
    </div>
  );
};

Song.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    album: PropTypes.string,
    artist: PropTypes.string,
    seconds: PropTypes.number,
    explicit: PropTypes.bool,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Song;
