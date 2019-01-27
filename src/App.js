import React, { Component } from 'react';
import './App.css';
import Link from './components/Link';
import MoviesList from './components/MoviesList';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=7c323e6e&s=harry-potter&type=movie")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Search
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Movies List
          </h1>
        </header>
        <Search />
        <MoviesList error={error} isLoaded={isLoaded} items={items} />
        <footer className="App-footer">
          <p className="App-created">Created by Mariana Brito, <Link /></p>
        </footer>
      </div>
    );
  }
}

export default App;
