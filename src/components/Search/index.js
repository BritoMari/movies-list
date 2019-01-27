import React, { Component } from 'react';
import './style.css';

class Search extends Component {
  state = {
    search: '',
  }

  valueChange = event  => {
    console.log(event.target.value);

    this.setState({
      search: event.target.value
    });
  }

  sendSearch = event => {
    const { fetchResult } = this.props;

    fetchResult(this.state.search);
  }

  render() {
    return (
      <div className="Search">
        <input value={this.state.search} onChange={this.valueChange} type="text" className="Search-input" placeholder="Search..."/>
        <button onClick={this.sendSearch} className="Search-buttton">go</button>
        <p className="Search-message">Use the field above to search for movies, for example: Harry Potter</p>
      </div>
    );
  }
}

export default Search;
