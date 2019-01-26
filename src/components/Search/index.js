import React, { Component } from 'react';
import './style.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input type="text" className="Search-input" placeholder="Search..."/>
        <button className="Search-buttton">go</button>
        <p className="Search-message">Use the field above to search for movies, for example: Harry Potter</p>
      </div>
    );
  }
}

export default Search;
