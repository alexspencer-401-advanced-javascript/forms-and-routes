import React, { Component } from 'react';
import { getRandomATLACharacter } from '../../services/random-character-api-call';
import Character from '../character/Character';
import Search from '../search/Search';

export default class Home extends Component {

  state = {
    character: {}
  }

  componentDidMount() {
    getRandomATLACharacter()
      .then((fetchedChar) => {
        this.setState({
          character: fetchedChar[0]
        });
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

  render() {

    return (
      <>
        <Character item={this.state.character} />
        <button onClick={this.handleOnClick}>Get Random Character</button>
        <Search />
      </>
    );
  }
}

