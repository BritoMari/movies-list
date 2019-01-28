import React, { Component } from 'react';
import './style.scss';

class MoviesList extends Component {

  render() {
    const { error, isLoaded, items } = this.props;

    if (error) {
      return <div className="MoviesList-error">Error: {error}</div>;
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