import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import themoviedbAPI from '../services/apiService';
// import Axios from 'axios';
import routes from '../routes';
// import Spinner from '../components/Spinner/Spinner';
import { toast } from 'react-toastify';

class MovieDetailsPage extends Component {
	state = {
		movie: null,
		loading: false,
		error: null,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		// console.log(Number(this.props.match.params.movieId));

		const { movieId } = this.props.match.params;
		// const response = await Axios.get(
		//   `${themoviedbAPI.BASE_URL}movie/${movieId}?api_key=${themoviedbAPI.MY_KEY}&language=en-US`,
		// )
		themoviedbAPI
			.fetchMovieDetails(movieId)
			.then(movie => this.setState({ movie }))
			.catch(error => {
				toast.error(error.message);
				this.setState({ error: error.message });
			})
			.finally(() => this.setState({ loading: false }));
		// console.log(this.state);
	}

	handleGoBack = () => {
		console.log('back!');
		const { location, history } = this.props;
		history.push(location?.state?.from || routes.movies);
	};

	render() {
		const {
			movie,
			loading,
		} = this.state;

		return (
			<>
				<button
					type="button"
					className="BackButton Button"
					onClick={this.handleGoBack}
				>
					Back
        </button>

				{this.state.movie && <MovieCard movie={movie} />}

				<ul className="NavList">
					<li className="NavLink-item">
						<NavLink
							exact
							to={`${this.props.match.url}/cast`}
							className="NavLink"
							activeClassName="NavLink--active"
						>
							Cast
            </NavLink>
					</li>
					<li className="NavLink-item">
						<NavLink
							exact
							// to="/movies/:movieId/reviews"
							to={`${this.props.match.url}/reviews`}
							className="NavLink"
							activeClassName="NavLink--active"
						>
							Reviews
            </NavLink>
					</li>
				</ul>

				<Switch>
					{/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
					<Route
						path={`${this.props.match.path}/cast`}
						render={props => {
							console.log(props);
							const movieId = Number(props.match.params.movieId);
							console.log(movieId);
							return <Cast {...props} movieId={movieId} />;
						}}
					/>
					{/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
					<Route
						path={`${this.props.match.path}/reviews`}
						component={Reviews}
					/>
				</Switch>
			</>
		);
	}
}

export default MovieDetailsPage;
