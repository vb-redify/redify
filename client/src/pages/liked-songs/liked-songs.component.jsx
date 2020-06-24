import * as React from 'react';

import PlaylistHeader from '../../components/playlist-header/playlist-header.component';
import PlaylistList from '../../components/playlist-list/playlist-list.component';
import './liked-songs.styles.css';

const LikedSongsPage = () => (
  <div className="liked-songs-container">
    <PlaylistHeader>Liked Songs</PlaylistHeader>
    <PlaylistList />
  </div>
);

export default LikedSongsPage;
