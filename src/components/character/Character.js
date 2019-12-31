import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ _id, name, photoUrl }) => {

  return (
    <div key={_id}>
      <figure>
        <img src={photoUrl} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

Character.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  photoUrl: PropTypes.string.isRequired,
};

export default Character;
