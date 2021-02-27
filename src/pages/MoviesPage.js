import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import getQueryParams from '../utils/getQueryParams';
import SearchBar from '../components/SearchBar';
// import themoviedbAPI from '../services/apiService';
import Spinner from '../components/Spinner/Spinner';
import MovieList from '../components/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  static propTypes = {};

  static defaultProps = {};

  componentWillMount() {}

  render() {
    const { movies, loading } = this.state;
    // const { match } = this.props;

    return (
      <div className="MainContainer">
        <SearchBar onSubmit={this.handleChangeQuery} />

        {loading ? <Spinner /> : <MovieList movies={movies} />}

        <ToastContainer />
      </div>
    );
  }
}

export default MoviesPage;
