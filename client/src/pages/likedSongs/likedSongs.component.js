import * as React from 'react';
import { useSelector } from 'react-redux';

const LikedSongsPage = () => {
  const likedSongsList = useSelector((state) => {
    return state.likedSongs.likedSongs;
  });
  return (
    <div>
      {likedSongsList.map((song) => (
        <div key={song.id}>{song.title}</div>
      ))}
    </div>
  );
};

export default LikedSongsPage;
