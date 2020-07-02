import React from 'react';
import { shallow } from 'enzyme';
import PlaylistHeader from './playlist-header.component';
import PlaylistImage from '../playlist-image/playlist-image.component';
import PlaylistDuration from '../playlist-duration/playlist-duration.component';

describe('Playlist Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlaylistHeader>Liked Songs</PlaylistHeader>);
  });
  it('Should render PLAYLIST for the user', () => {
    const playlist = wrapper.find('div.playlist-header-headline').text();
    expect(playlist).toEqual('Playlist');
  });
  it('Should render a playlist image', () => {
    const image = wrapper.find(PlaylistImage);
    expect(image.exists()).toBe(true);
  });
  it('Should allow the playlist title to be passed as a child', () => {
    const title = wrapper.find('div.playlist-header-title').text();
    expect(title).toEqual('Liked Songs');
  });
  it('Should render the duration of the playlist', () => {
    const duration = wrapper.find(PlaylistDuration);
    expect(duration.exists()).toBe(true);
  });
});
