import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateTime } from '../../redux/likedSongs/likedSongs.actions';

import selectButton from './audio-button.util';

import './audio-button.styles.scss';

const AudioButton = ({ name, setTime }) => {
  let currentTime = 0;

  const grabTime = () => {
    setInterval(() => {
      currentTime += 1;
      setTime(currentTime);
    }, 1000);
  };

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
  setTime: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setTime: (time) => dispatch(updateTime(time)),
});

export default connect(null, mapDispatchToProps)(AudioButton);
