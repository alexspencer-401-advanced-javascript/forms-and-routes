import React, { Component } from 'react';
import { getSearchedTLACharacter } from '../../services/random-character-api-call';

export default class Home extends Component {

  state = {
    name: '',
    filtered: [],
    search: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getSearchedTLACharacter(this.state.search)
      .then(result => {
        this.setState({ filtered: result });
        this.setState(state => ({ filtered: [...state.filtered] }));
      });
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input" value={this.state.search} name="search" placeholder="Search for characters here!" onChange={this.handleChange} />
          <button>Search</button>
        </form>
      </section >
    );
  }
}

