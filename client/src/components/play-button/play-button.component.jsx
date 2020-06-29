import React from 'react';
import './play-button.styles.scss';
import { ReactComponent as Play } from '../../assets/icons/play.svg';

const styles = {
  height: '22px',
  width: '22px',
  fill: '#333138',
  stroke: 'none',
};

const PlaylistPlayer = () => (
  <div className="play-button-container">
    <div className="play-image-container">
      <Play className="play-image" style={styles} />
    </div>
  </div>
);

export default PlaylistPlayer;
