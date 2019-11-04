import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ item }) => {

  return (
    <div key={item}>
      <figure>
        <img src={item.photoUrl} alt={name} />
      </figure>
    </div>
  );
};

Character.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
  })
};

export default Character;
