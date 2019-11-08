import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('renders CharacterDetail', () => {
    const wrapper = shallow(<CharacterDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
