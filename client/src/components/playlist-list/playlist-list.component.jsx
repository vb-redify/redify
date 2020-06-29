import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../song/song.component';
import './playlist-list.styles.scss';

const PlaylistList = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs,
  );
  return (
    <div className="playlist-list-container">
      {likedSongsList.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};

export default PlaylistList;
