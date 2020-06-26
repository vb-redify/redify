import React from 'react';
import { useSelector } from 'react-redux';
import getTime from './playlist-duration.util';
import './playlist-duration.styles.css';

const PlaylistDuration = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs,
  );

  const [totalHours, totalMinutes, remainingSeconds] = getTime(likedSongsList);

  return (
    <div className="playlist-duration-container">
      {totalHours > 0 ? (
        <div>
          {totalHours}
          <span>{totalHours > 1 ? ' hrs ' : ' hr '}</span>
          {totalMinutes}
          <span>{totalMinutes > 1 ? ' mins' : ' min'}</span>
        </div>
      ) : (
        <div>
          {totalMinutes}
          <span>{totalMinutes > 1 ? ' mins ' : ' min'}</span>
          {remainingSeconds}
          <span>{remainingSeconds > 1 ? ' secs' : ' sec'}</span>
        </div>
      )}
    </div>
  );
};

export default PlaylistDuration;
