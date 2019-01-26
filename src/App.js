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
        </header>
        <MoviesList />
        <footer className="App-footer">
          <p className="App-created">Created by Mariana Brito, <Link /></p>
        </footer>
      </div>
    );
  }
}

export default App;
