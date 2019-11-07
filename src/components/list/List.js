import React, { Component } from 'react';
import { getSearchedTLACharacter } from '../../services/random-character-api-call';
import PropTypes from 'prop-types';
import ListItem from '../listItem/ListItem';

export default class List extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        search: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  state = {
    characters: [],
    page: 1
  }

  componentDidMount() {
    getSearchedTLACharacter(this.props.match.params.search || '', 1)
      .then(characters => {
        this.setState({ characters });
        console.log(characters);
      });
  }

  componentDidUpdate(prevState) {
    if(prevState.page !== this.state.page) {
      getSearchedTLACharacter(this.props.match.params.search || '', this.state.page)
        .then(characters => {
          this.setState({ characters });
        });
    }
  }

  decrementPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }));
  }

  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {

    const characterElements = this.state.characters.map(character => (
      <ListItem
        key={character._id}
        name={character.name}
        _id={character._id}
        image={character.photoUrl}
      />
    ));

    return (
      <>
        <button onClick={this.decrementPage}>⇦</button>
        <button onClick={this.incrementPage}>⇨</button>
        <ul>
          {characterElements}
        </ul>
      </>
    );
  }
}
