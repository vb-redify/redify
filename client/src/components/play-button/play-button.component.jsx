import React from 'react';
import './play-button.styles.scss';
import { ReactComponent as Play } from '../../assets/icons/play.svg';

const styles = {
  height: '28px',
  width: '28px',
  fill: 'white',
  stroke: 'white',
};

const PlaylistPlayer = () => (
  <div className="play-button-container">
    <div className="play-image-container">
      <Play className="play-image" style={styles} />
    </div>
  </div>
);

export default PlaylistPlayer;
