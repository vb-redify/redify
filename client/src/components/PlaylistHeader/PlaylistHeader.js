import React from 'react';
import './PlaylistHeader.css';

const PlaylistHeader = (props) => {
  return (
    <div className='playlist-header-container'>
      <div className='playlist-header-image-container'>This is the image</div>
      <div className='playlist-header-details-container'>
        <div className='playlist-header-headline'>
          Playlist
        </div>
        <div className='playlist-header-title'>
          {props.children}
        </div>
        <div>
          The duration of all songs
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
