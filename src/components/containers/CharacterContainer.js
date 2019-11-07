import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSpecificCharacter } from '../../services/random-character-api-call';
import CharacterDetail from '../character/CharacterDetail';

export default class CharacterContainer extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    character: {}
  }

  componentDidMount() {
    console.log(this.props.match.params);
    getSpecificCharacter(this.props.match.params.id)
      .then(character => {
        this.setState({ character });
        console.log(character);
      });
  }

  render() {

    const { character } = this.state;

    return (
      <div>
        <CharacterDetail id={character._id} name={character.name} photoUrl={character.photoUrl} gender={character.gender} hair={character.hair} affiliation={character.affiliation} weapon={character.weapon} />
      </div>
    );
  }
}
