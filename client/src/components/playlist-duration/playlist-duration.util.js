const getTime = (songs) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let totalHours = 0;
  let totalMinutes = 0;
  const totalSeconds = songs.reduce(
    (accum, song) => accum + song.seconds,
    0,
  );

  seconds = totalSeconds >= 60 ? totalSeconds % 60 : totalSeconds;
  totalMinutes = totalSeconds >= 60 ? Math.floor(totalSeconds / 60) : totalMinutes;
  minutes = totalMinutes >= 60 ? totalMinutes % 60 : totalMinutes;
  totalHours = totalMinutes >= 60 ? Math.floor(totalMinutes / 60) : totalHours;
  hours = totalHours >= 60 ? totalHours % 60 : totalHours;

  return [seconds, minutes, hours];
};

export default getTime;
