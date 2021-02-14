import React, { Component } from 'react';
// import Axios from 'axios';
import themoviedbAPI from '../services/apiService';

// https://developers.themoviedb.org/3/trending/get-trending

export class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    themoviedbAPI
      .fetchTrendingMovies()
      .then(movieArray => this.setState({ movies: movieArray }));
    console.log(this.state.movies);
    // Axios.get('
    // https://api.themoviedb.org/3/trending/all/day?api_key=66acb4573ba980ae8ac5981a52e8de6b');
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
