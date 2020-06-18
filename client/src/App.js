import React from 'react';
import './App.css';
import TrackData from './data/track-data';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to the Redify App</h1>
      <h3>Some Artist Tracks We'll Be Showcasing</h3>
      <div>
        {TrackData.map((track) => (
          <div>{track.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
