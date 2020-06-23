import React from 'react';

import ProgressBar from '../progress-bar/progress-bar.component';
import AudioButton from '../audio-button/audio-button.component';

import './audio-controller.styles.scss';

const AudioController = () => {
  const buttons = ['shuffle', 'previous', 'play', 'next', 'repeat'];

  return (
    <div className="audio-controller-container">
      <div className="music-controls-container">
        <div className="button-list-container">
          {buttons.map((el) => (
            <AudioButton key={`acb ${el}`} name={el} />
          ))}
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default AudioController;
