import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => {

  return (
    <li key={item}>
      <figure>
        <img src={item.photoUrl} alt={item.name} />
        <figcaption>{item.name}</figcaption>
      </figure>
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
  })
};

export default ListItem;
