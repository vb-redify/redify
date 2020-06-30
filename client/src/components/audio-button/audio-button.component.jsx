import React from 'react';
import PropTypes from 'prop-types';

import { selectButton, grabTime } from './audio-button.util';

import './audio-button.styles.scss';

const AudioButton = ({ name }) => {
  return (
    <div
      className="audio-button"
      onKeyPress={name === 'Play' ? grabTime : null}
      onClick={name === 'Play' ? grabTime : null}
    >
      {selectButton(name)}
    </div>
  );
};

AudioButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AudioButton;
