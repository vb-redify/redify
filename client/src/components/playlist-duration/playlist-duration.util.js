const getSeconds = (songs) => songs.reduce((accum, song) => accum + song.seconds, 0);

export default getSeconds;
