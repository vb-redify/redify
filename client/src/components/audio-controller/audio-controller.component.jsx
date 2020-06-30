import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { connect } from 'react-redux';

import ProgressBar from '../progress-bar/progress-bar.component';
import AudioButton from '../audio-button/audio-button.component';

import './audio-controller.styles.scss';

const AudioController = ({ currentTime }) => {
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
        <p>{moment.utc(currentTime * 1000).format('mm:ss')}</p>
        <ProgressBar />
        <p>4:16</p>
      </div>
    </div>
  );
};

AudioController.propTypes = {
  currentTime: PropTypes.number.isRequired,
};

const mapStateToProps = ({ likedSongs: { currentTime } }) => ({
  currentTime,
});

export default connect(mapStateToProps)(AudioController);
