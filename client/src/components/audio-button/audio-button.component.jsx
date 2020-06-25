import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Next } from '../../assets/icons/next.svg';
import { ReactComponent as Previous } from '../../assets/icons/previous.svg';
import { ReactComponent as Repeat } from '../../assets/icons/repeat.svg';
import { ReactComponent as Shuffle } from '../../assets/icons/shuffle.svg';
import { ReactComponent as Queue } from '../../assets/icons/list.svg';
import { ReactComponent as Device } from '../../assets/icons/speaker.svg';

import './audio-button.styles.scss';

const AudioButton = ({ name }) => {
  const styles = {
    fill: '#FFFFFA',
  };

  const selectButton = (buttonName) => {
    switch (buttonName) {
      case 'Play':
        return <Play style={styles} />;
      case 'Next':
        return <Next style={styles} />;
      case 'Previous':
        return <Previous style={styles} />;
      case 'Repeat':
        return <Repeat />;
      case 'Shuffle':
        return <Shuffle />;
      case 'Queue':
        return <Queue />;
      case 'Device':
        return <Device />;
      default:
        return null;
    }
  };

  return <div className="audio-button">{selectButton(name)}</div>;
};

AudioButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AudioButton;
