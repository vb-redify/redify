import LIKED_SONGS from '../../data/track-data';
import LikedSongsTypes from './likedSongs.types';

const INITITAL_STATE = {
  likedSongs: LIKED_SONGS,
  currentTime: 0,
};

const likedSongsReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case LikedSongsTypes.UPDATE_TIME:
      return {
        ...state,
        currentTime: action.payload,
      };
    default:
      return state;
  }
};

export default likedSongsReducer;
