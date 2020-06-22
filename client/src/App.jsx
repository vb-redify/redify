import React from 'react';
import './App.css';

import LikedSongsPage from './pages/likedSongs/likedSongs.component';

const App = () => (
  <div className="App">
    <h1>Welcome to the Redify App</h1>
    <div>
      <LikedSongsPage />
    </div>
  </div>
);

export default App;
