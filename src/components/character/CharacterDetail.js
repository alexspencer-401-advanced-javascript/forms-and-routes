import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ id, name, photoUrl, gender, hair, affiliation, weapon }) => {

  return (
    <div key={id}>
      <figure>
        <img src={photoUrl} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <p>{gender}</p>
      <p>{hair}</p>
      <p>{affiliation}</p>
      <p>{weapon}</p>
    </div>
  );
};

CharacterDetail.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  gender: PropTypes.string,
  hair: PropTypes.string,
  affiliation: PropTypes.string,
  weapon: PropTypes.string
};

export default CharacterDetail;
