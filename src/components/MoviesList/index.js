import React, { Component } from 'react';
import './style.css';

class MoviesList extends Component {
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
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="MoviesList">
          {items.map(item => (
            <li className="MoviesList-item" key={item.Title}>
              <span className="MoviesList-img" style={{ backgroundImage: `url(${item.Poster})`}} />
              <h2 className="MoviesList-title">{item.Title}</h2>
              <p className="MoviesList-year">Ano: <strong>{item.Year}</strong></p>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MoviesList;