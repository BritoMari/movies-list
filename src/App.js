import React, { Component } from 'react';
import './App.css';
import Link from './components/Link';
import MoviesList from './components/MoviesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Movies List
          </h1>
          <Link />
        </header>
        <MoviesList />
      </div>
    );
  }
}

export default App;
