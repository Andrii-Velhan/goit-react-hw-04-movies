import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import themoviedbAPI from '../services/apiService';
import Spinner from '../components/Spinner/Spinner';
import getQueryParams from '../utils/getQueryParams';

class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  fetchMovies = query => {
    this.setState({ loading: true });

    themoviedbAPI
      .fetchMoviesWithQuery(query)
      .then(movies => {
        if (movies.length === 0) {
          toast.error('Nothing not found');
        }
        this.setState({ movies });
      })
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  };

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
