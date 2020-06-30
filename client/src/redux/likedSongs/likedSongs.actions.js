import LikedSongsTypes from './likedSongs.types';

export const changeSong = (song) => ({
  type: LikedSongsTypes.CHANGE_SONG,
  payload: song,
});

export const updateTime = (time) => ({
  type: LikedSongsTypes.UPDATE_TIME,
  payload: time,
});
