import * as React from 'react';

import PlaylistHeader from '../../components/playlist-header/playlist-header.component';
import PlaylistList from '../../components/playlist-list/playlist-list.component';
import PlayButton from '../../components/play-button/play-button.component';
import './liked-songs.styles.css';

const LikedSongsPage = () => (
  <div className="liked-songs-container">
    <PlaylistHeader>Liked Songs</PlaylistHeader>
    <PlayButton />
    <PlaylistList />
  </div>
);

export default LikedSongsPage;
