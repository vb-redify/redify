import LIKED_SONGS from '../../data/track-data';

const INITITAL_STATE = {
  likedSongs: LIKED_SONGS,
};

const likedSongsReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default likedSongsReducer;
