import * as React from 'react';
import Fade from 'react-reveal/Fade';
import PlaylistHeader from '../../components/playlist-header/playlist-header.component';
import PlaylistList from '../../components/playlist-list/playlist-list.component';
import PlayButton from '../../components/play-button/play-button.component';
import './liked-songs.styles.scss';

const LikedSongsPage = () => (
  <div className="liked-songs-container">
    <Fade duration={2000}>
      <PlaylistHeader>Liked Songs</PlaylistHeader>
      <PlayButton />
      <PlaylistList />
    </Fade>
  </div>
);

export default LikedSongsPage;
