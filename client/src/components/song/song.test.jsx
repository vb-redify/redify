import React from 'react';
import { shallow } from 'enzyme';
import Song from './song.component';
import Track from '../../models/track';

describe('Song', () => {
  const exampleSong1 = new Track(
    '4',
    'Rescue Me',
    'Rescue Me',
    'One Republic',
    158,
    false,
    'https://img.discogs.com/Mbh-0OgrxhfSYGEXHnKHQEscbtc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13640147-1558082781-6721.jpeg.jpg',
  );
  const exampleSong2 = new Track(
    '4',
    'Rescue Me',
    'Rescue Me',
    'One Republic',
    10000,
    false,
    'https://img.discogs.com/Mbh-0OgrxhfSYGEXHnKHQEscbtc=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13640147-1558082781-6721.jpeg.jpg',
  );
  let wrapper1;
  let wrapper2;
  beforeEach(() => {
    wrapper1 = shallow(<Song song={exampleSong1} />);
    wrapper2 = shallow(<Song song={exampleSong2} />);
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
});
