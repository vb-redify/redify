import React from 'react';
import { useSelector } from 'react-redux';
import getSeconds from './playlist-duration.util';
import './playlist-duration.styles.css';

const PlaylistDuration = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs,
  );

  const totalSeconds = getSeconds(likedSongsList);

  let totalMinutes = likedSongsList.reduce(
    (accum, song) => accum + song.minutes,
    0,
  );
  const extraMinutes = Math.floor(totalSeconds / 60);
  totalMinutes += extraMinutes;

  let remainingMinutes = 0;
  let totalHours = 0;

  if (totalMinutes >= 60) {
    totalHours += Math.floor(totalMinutes / 60);
    remainingMinutes = totalMinutes % 60;
    totalMinutes = remainingMinutes;
  }

  const remainingSeconds = totalSeconds % 60;

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
