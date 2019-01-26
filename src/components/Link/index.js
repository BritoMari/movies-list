import React, { Component } from 'react';
import './style.css';

class Link extends Component {
  render() {
    return (
      <a
        className="App-link"
        href="https://github.com/BritoMari/movies-list"
        target="_blank"
        rel="noopener noreferrer"
      >
        see the code here
        </a>
    );
  }
}

export default Link;
