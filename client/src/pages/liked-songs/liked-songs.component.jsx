import * as React from 'react';

import PlaylistHeader from '../../components/playlist-header/playlist-header.component';
import PlaylistList from '../../components/playlist-list/playlist-list.component';
import PlaylistPlayer from '../../components/playlist-player/playlist-player.component';
import './liked-songs.styles.css';

const LikedSongsPage = () => (
  <div className="liked-songs-container">
    <PlaylistHeader>Liked Songs</PlaylistHeader>
    <PlaylistPlayer />
    <PlaylistList />
  </div>
);

export default LikedSongsPage;
