import React from 'react';
import { useSelector } from 'react-redux';
import './playlist-list.styles.css';

const PlaylistList = () => {
  const likedSongsList = useSelector(
    ({ likedSongs: { likedSongs } }) => likedSongs
  );
  return (
    <div className="playlist-list-container">
      <div className="">
        {likedSongsList.map((song) => (
          <div key={song.id} className="song-container">
            {song.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;