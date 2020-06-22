import React from 'react';

import LikedSongsPage from './pages/likedSongs/likedSongs.component';
import Player from './components/player/player.component';

import './App.scss';

const App = () => (
  <div className="App">
    <h1>Welcome to the Redify App</h1>
    <div>
      <LikedSongsPage />
    </div>
    <Player />
  </div>
);

export default App;
