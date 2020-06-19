import React from 'react';
import './App.css';

import LikedSongsPage from './pages/likedSongs/likedSongs.component';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to the Redify App</h1>
      <h3>Some Artist Tracks We'll Be Showcasing</h3>
      <div>
        <LikedSongsPage />
      </div>
    </div>
  );
}

export default App;
