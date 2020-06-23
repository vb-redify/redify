import React from 'react';
import PropTypes from 'prop-types';

import './audio-button.styles.scss';

const AudioButton = ({ name }) => {
  const styles = {
    transform: 'scaleX(-1)',
  };

  return (
    <div className="audio-button">
      <img
        style={name === 'next' ? styles : null}
        src={`./images/${name === 'next' ? 'previous' : name}.svg`}
        alt={`${name} button`}
      />
    </div>
  );
};

AudioButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AudioButton;
