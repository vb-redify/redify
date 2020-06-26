import React from 'react';

import AudioButton from '../audio-button/audio-button.component';
import ProgressBar from '../progress-bar/progress-bar.component';

import './volume-controller.styles.scss';

const VolumeController = () => {
  const buttons = ['Queue', 'Device'];

  return (
    <div className="volume-container">
      {buttons.map((icon) => (
        <AudioButton key={`vcb ${icon}`} name={icon} />
      ))}
      <ProgressBar volume />
    </div>
  );
};

export default VolumeController;
