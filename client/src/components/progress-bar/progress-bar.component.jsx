import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as VolumeIcon } from '../../assets/icons/volume-2.svg';

import './progress-bar.styles.scss';

const ProgressBar = ({ volume }) => (
  <div className={volume ? 'volume-bar-container' : 'progress-bar-container'}>
    {volume ? (
      <div className="audio-button">
        <VolumeIcon />
      </div>
    ) : null}
    <div className={volume ? 'volume-bar' : 'progress-bar'} />
  </div>
);

ProgressBar.propTypes = {
  volume: PropTypes.bool,
};

ProgressBar.defaultProps = {
  volume: false,
};

export default ProgressBar;
