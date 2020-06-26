const getTime = (songs) => {
  const totalSeconds = songs.reduce(
    (accum, song) => accum + song.seconds,
    0,
  );

  let totalMinutes = songs.reduce(
    (accum, song) => accum + song.minutes,
    0,
  );
  const extraMinutes = Math.floor(totalSeconds / 60);
  totalMinutes += extraMinutes;

  let remainingMinutes = 0;
  let totalHours = 0;

  if (totalMinutes >= 60) {
    totalHours += Math.floor(totalMinutes / 60);
    remainingMinutes = totalMinutes % 60;
    totalMinutes = remainingMinutes;
  }

  const remainingSeconds = totalSeconds % 60;

  return [totalHours, totalMinutes, remainingSeconds];
};

export default getTime;
