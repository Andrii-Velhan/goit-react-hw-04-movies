import React, { Component } from 'react';
import themoviedbAPI from '../services/apiService';
import Spinner from '../components/Spinner/Spinner';
import { toast } from 'react-toastify';
import MovieList from '../components/MovieList';
// import Axios from 'axios';
export class HomePage extends Component {
	state = {
		movies: [],
		loading: false,
		error: null,
	};

	async componentDidMount() {
		this.setState({ loading: true });

		themoviedbAPI
			.fetchTrendingMovies()
			.then(movieArray => this.setState({ movies: movieArray }))
			.catch(error => {
				toast.error(error.message);
				this.setState({ error: error.message });
			})
			.finally(() => this.setState({ loading: false }));

		// Axios.get('
		// https://api.themoviedb.org/3/trending/all/day?api_key=66acb4573ba980ae8ac5981a52e8de6b');
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<div className="Container">
				<h1>Trending today</h1>
				{loading ? <Spinner /> : <MovieList movies={movies} />}
			</div>
		);
	}
}

export default HomePage;
