import React from 'react';

import ProgressBar from '../progress-bar/progress-bar.component';
import AudioButton from '../audio-button/audio-button.component';

import './audio-controller.styles.scss';

const AudioController = () => {
  const buttons = ['Shuffle', 'Previous', 'Play', 'Next', 'Repeat'];

  return (
    <div className="audio-controller-container">
      <div className="music-controls-container">
        <div className="button-list-container">
          {buttons.map((el) => (
            <AudioButton key={`acb ${el}`} name={el} />
          ))}
        </div>
      </div>
      <div className="progress-time-container">
        <p>0:00</p>
        <ProgressBar />
        <p>4:16</p>
      </div>
    </div>
  );
};

export default AudioController;
