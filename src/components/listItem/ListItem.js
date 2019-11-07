import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ _id, name, image }) => {
  return (
    <li key={_id}>
      <figure>
        <img src={image} alt={name}></img>
        <Link to={`/character/${_id}`}>
          <figcaption>{name}</figcaption>
        </Link>
      </figure>
    </li>
  );
};

ListItem.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};

export default ListItem;
