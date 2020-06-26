import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import AudioController from '../audio-controller/audio-controller.component';
import VolumeController from '../volume-controller/volume-controller.component';

import './player.styles.scss';

const Player = () => (
  <div className="player-container">
    <CollectionItem />
    <AudioController />
    <VolumeController />
  </div>
);

export default Player;
