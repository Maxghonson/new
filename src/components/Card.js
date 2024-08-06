import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { title, year, type, poster } = this.props;
    return (
      <div className="card">
        <img src={poster} alt={title} />
        <h2>{title}</h2>
        <i> {year}</i>
        <p>{type}</p>
      </div>
    );
  }
}