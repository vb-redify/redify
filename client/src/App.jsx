import React from 'react';

import LikedSongsPage from './pages/liked-songs/liked-songs.component';
import Player from './components/player/player.component';

import './App.scss';

const App = () => (
  <div className="App">
    <LikedSongsPage />
    <Player />
  </div>
);

export default App;
