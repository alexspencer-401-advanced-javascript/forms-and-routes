import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem component', () => {
  it('renders ListItem', () => {
    const wrapper = shallow(<ListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
