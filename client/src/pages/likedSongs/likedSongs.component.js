import * as React from 'react';
import { useSelector } from 'react-redux';

import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';

const LikedSongsPage = () => {
  const likedSongsList = useSelector((state) => {
    return state.likedSongs.likedSongs;
  });
  return (
    <div>
      <PlaylistHeader>Liked Songs</PlaylistHeader>
      {likedSongsList.map((song) => (
        <div key={song.id}>{song.title}</div>
      ))}
    </div>
  );
};

export default LikedSongsPage;
