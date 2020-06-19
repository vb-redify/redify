import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import likedSongsReducer from './likedSongs/likedSongs.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  likedSongs: likedSongsReducer,
});

export default persistReducer(persistConfig, rootReducer);
