import LikedSongsTypes from './likedSongs.types';

const changeSong = (song) => ({
  type: LikedSongsTypes.CHANGE_SONG,
  payload: song,
});

export default changeSong;
