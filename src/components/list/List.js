import React, { Component } from 'react';
import ListItem from '../listItem/ListItem';

export default class Home extends Component {

  render() {

    const characterItems = this.props.items.map((item, i) => (
      <ListItem
        key={item._id || i}
        {...item} />
    ));

    return (
      <ul>
        {characterItems}
      </ul>
    );
  }
}

