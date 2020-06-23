import React from 'react';
import { useSelector } from 'react-redux';
import './playlist-duration.styles.css';

const PlaylistDuration = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs
  );

  const totalSeconds = likedSongsList.reduce((accum, song) => {
    return accum + song.seconds;
  }, 0);

  let totalMinutes = likedSongsList.reduce((accum, song) => {
    return accum + song.minutes;
  }, 0);

  const extraMins = Math.floor(totalSeconds / 60);
  totalMinutes += extraMins;

  const remainingSeconds = totalSeconds % 60;

  console.log(totalMinutes, remainingSeconds);

  return (
    <div>
      {totalMinutes}
      <span> min</span>
      {remainingSeconds}
      <span> secs</span>
    </div>
  );
};

export default PlaylistDuration;
