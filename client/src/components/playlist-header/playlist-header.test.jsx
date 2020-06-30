import React from 'react';
import { shallow } from 'enzyme';
import PlaylistHeader from './playlist-header.component';

describe('Playlist Header', () => {
  it('The playlist component allows the playlist title to be passed as a child', () => {
    const wrapper = shallow(<PlaylistHeader>Liked Songs</PlaylistHeader>);
    const title = wrapper.find('div.playlist-header-title').text();
    expect(title).toEqual('Liked Songs');
  });
});
