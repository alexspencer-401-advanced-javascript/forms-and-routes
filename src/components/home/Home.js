import React, { Component } from 'react';
import { getRandomATLACharacter } from '../../services/random-character-api-call';
import Character from '../character/Character';
import Search from '../search/Search';
import PropTypes from 'prop-types';

export default class Home extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    character: {},
    search: '',
    page: 1
  }

  componentDidMount() {
    getRandomATLACharacter()
      .then((fetchedChar) => {
        this.setState({ character: fetchedChar[0] });
      });
  }

  handleOnClick = () => {
    getRandomATLACharacter()
      .then((fetchedChar) => {
        this.setState({
          character: fetchedChar[0]
        });
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/list/${this.state.search}`);
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  render() {

    return (
      <>
        <Character name={this.state.character.name} _id={this.state.character._id} photoUrl={this.state.character.photoUrl} />
        <button onClick={this.handleOnClick}>Get Random Character</button>
        <Search handleSubmit={this.handleSubmit} search={this.state.search} handleChange={this.handleChange} />
      </>
    );
  }
}

