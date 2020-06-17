class Track {
  constructor(id, title, album, artist, minutes, seconds, explicit, imageUrl) {
    this.id = id;
    this.title = title;
    this.album = album;
    this.artist = artist;
    this.minutes = minutes;
    this.seconds = seconds;
    this.explicit = explicit;
    this.imageUrl = imageUrl;
  }
}

export default Track;