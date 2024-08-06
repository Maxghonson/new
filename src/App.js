import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import './App.css'

class App extends Component {
  state = {
    movies: [],
    search: '',
    error: false,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=ad4632a6&s=Apple`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search.slice(0, 15), error: false });
        } else {
          this.setState({ movies: [], error: true });
        }
      })
      .catch(error => console.log(error));
  }

  handleSearch = (query) => {
    this.setState({ search: query });
    fetch(`https://www.omdbapi.com/?apikey=ad4632a6&s=${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          this.setState({ movies: data.Search.slice(0, 15), error: false })
        } else {
          this.setState({ movies: [], error: true })
        }
      })
      .catch(error => console.log(error));
  };

  handleBack = () => {
    if(fetch(`https://www.omdbapi.com/?apikey=ad4632a6&s=Apple`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        this.setState({ movies: data.Search.slice(0, 15), error: false });
      } else {
        this.setState({ movies: [], error: true });
      }
    })){

      this.setState({ movies: [], search: '', error: false });
    }
  };

  render() {
    const { movies, error } = this.state;

    return (
      <div className="app">
        <Navbar onSearch={this.handleSearch} />
        {error ? (
          <div className='eror'>
            <h1>404 Not  Found</h1>
            <button onClick={this.handleBack}>Back To Title Screen</button>
          </div>
        ) : (
          <Cards movies={movies} />
        )}
      </div>
    );
  }
}

export default App;