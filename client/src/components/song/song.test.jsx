import React from 'react';
import { shallow } from 'enzyme';
import Song from './song.component';
import Track from '../../models/track';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Music } from '../../assets/icons/music.svg';

describe('Song', () => {
  const exampleSong1 = new Track(
    '4',
    'Rescue Me',
    'Rescue Me',
    'One Republic',
    158,
    false,
    'https://img.discogs.com/Mbh-0OgrxhfSYGEXHnKHQEscbtc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13640147-1558082781-6721.jpeg.jpg'
  );
  const exampleSong2 = new Track(
    '3',
    'Old Pine',
    'Every Kingdom',
    'Ben Howard',
    10000,
    true,
    'https://img.discogs.com/9Vv6YRSPRVBDghDIc5GQOQZ1YfA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6152967-1429649908-3387.jpeg.jpg'
  );
  let wrapper1;
  let wrapper2;
  beforeEach(() => {
    wrapper1 = shallow(<Song song={exampleSong1} />);
    wrapper2 = shallow(<Song song={exampleSong2} />);
  });
  it('Should render a Song', () => {
    expect(wrapper1.exists()).toBe(true);
  });
  it('The song renders minutes seconds when less than an hour', () => {
    const duration = wrapper1.find('div.song-duration').text();
    expect(duration).toBe('2:38');
  });
  it('The song renders hours, minutes, seconds when less than an hour', () => {
    const duration = wrapper1.find('div.song-duration').text();
    expect(duration).toBe('2:38');
  });
  it('The songs calculates hours, minutes and seconds accurately', () => {
    const duration = wrapper2.find('div.song-duration').text();
    expect(duration).toBe('2:46:40');
  });
  it('Should render a song title', () => {
    const title = wrapper2.find('div.song-title').text();
    expect(title).toBe('Old Pine');
  });
  it('Should render an artist', () => {
    const artist = wrapper2.find('div.song-artist').text();
    expect(artist).toBe('Ben Howard');
  });
  it('Should render an album', () => {
    const album = wrapper2.find('div.song-album').text();
    expect(album).toBe('Every Kingdom');
  });
  it('Should NOT render an explicit', () => {
    const explicit = wrapper1.find('div.song-explicit');
    expect(explicit.exists()).toBe(false);
  });
  it('Should render an explicit', () => {
    const explicit = wrapper2.find('div.song-explicit');
    expect(explicit.exists()).toBe(true);
  });
  it('Should toggle Music and Play icons when user hovers song', () => {
    // check initial state icon
    let musicIcon = wrapper1.find(Music);
    let playIcon = wrapper1.find(Play);
    expect(musicIcon.exists()).toBe(true);
    expect(playIcon.exists()).toBe(false);
    // check mousever state
    wrapper1.simulate('mouseover');
    musicIcon = wrapper1.find(Music);
    playIcon = wrapper1.find(Play);
    expect(musicIcon.exists()).toBe(false);
    expect(playIcon.exists()).toBe(true);
    // check icon when user stops hovering the song
    wrapper1.simulate('mouseout');
    musicIcon = wrapper1.find(Music);
    playIcon = wrapper1.find(Play);
    expect(musicIcon.exists()).toBe(true);
    expect(playIcon.exists()).toBe(false);
  });
});
