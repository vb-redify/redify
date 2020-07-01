import React from 'react';
import { useSelector } from 'react-redux';
import getTime from './playlist-duration.util';
import './playlist-duration.styles.scss';

const PlaylistDuration = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs,
  );

  const [hours, minutes, seconds] = getTime(likedSongsList);

  return (
    <div className="playlist-duration-container">
      {hours > 0 ? (
        <div>
          {hours}
          <span>{hours > 1 ? ' hrs ' : ' hr '}</span>
          {minutes}
          <span>{minutes > 1 ? ' mins' : ' min'}</span>
        </div>
      ) : (
        <div>
          {minutes}
          <span>{minutes > 1 ? ' mins ' : ' min'}</span>
          {seconds}
          <span>{seconds > 1 ? ' secs' : ' sec'}</span>
        </div>
      )}
    </div>
  );
};

export default PlaylistDuration;
