import { combineReducers } from 'redux';
import likedSongsReducer from './likedSongs/likedSongs.reducer';

const rootReducer = combineReducers({
  likedSongs: likedSongsReducer,
});

export default rootReducer;
