import React from 'react';
import './play-button.styles.scss';
import { ReactComponent as Play } from '../../assets/icons/play2.svg';

const PlaylistPlayer = () => (
  <div className="play-button-container">
    <div className="play-image-container">
      <Play />
    </div>
  </div>
);

export default PlaylistPlayer;
