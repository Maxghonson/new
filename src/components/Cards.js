import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="cards">
        {movies.map((movie, index) => (
          <Card key={index} title={movie.Title} year={movie.Year} type={movie.Type} poster={movie.Poster} />
        ))}
      </div>
    );
  }
}

export default Cards;