import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import themoviedbAPI from '../services/apiService';
import Axios from 'axios';
// import { MY_KEY, BASE_URL } from '../services/apiService';
// import Spinner from '../components/Spinner/Spinner';
// import { toast } from 'react-toastify';

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    genres: null,
    overview: null,
    release_date: null,
    title: null,
    name: null,
    vote_average: null,
    movie: null,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { movieId } = this.props.match.params;
    // const BASE_URL = `https://api.themoviedb.org/3/`;
    // const MY_KEY = `66acb4573ba980ae8ac5981a52e8de6b`;

    const response = await Axios.get(
      `${themoviedbAPI.BASE_URL}movie/${movieId}?api_key=${themoviedbAPI.MY_KEY}&language=en-US`,
    );
    this.setState({ ...response.data });
    // console.log(response.data);
  }

  render() {
    const {
      backdrop_path,
      genres,
      overview,
      release_date,
      title,
      name,
      vote_average,
      movie,
      // loading,
      // error,
    } = this.state;
    console.log(movie);
    return (
      <>
        {/* <h1>Movie {this.props.match.params.movieId} Details Page</h1> */}
        {/* <h1>Movie {this.context.value.match.params.movieId} Details Page</h1> */}
        <>
          <div className="Card">
            <img
              src={
                backdrop_path
                  ? `${themoviedbAPI.IMG_URL}${backdrop_path}`
                  : `${themoviedbAPI.defaultImage}`
              }
              alt={title || name}
            />

            <div className="CardInfo">
              <h1>{title || name}</h1>
              {vote_average > 0 && (
                <p>
                  <span className="Title">User Score: </span>
                  {vote_average * 10}%
                </p>
              )}

              {release_date && (
                <p>
                  <span className="Title">Release date: </span>
                  {release_date}
                </p>
              )}
              {overview && (
                <>
                  <h2>Overview</h2>
                  <p>{overview}</p>
                </>
              )}

              {genres !== null && (
                <>
                  <h2>Genres</h2>
                  <ul className="Genres">
                    {genres.map(({ id, name }) => (
                      <li key={id} className="GenresItem">
                        {name}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </>

        <ul>
          <li>
            <NavLink
              exact
              to="/movies/:movieId/cast"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/movies/:movieId/reviews"
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        {/* <Switch> */}
        <Route exact path="/movies/:movieId/cast" component={Cast} />
        <Route exact path="/movies/:movieId/reviews" component={Reviews} />
        {/* </Switch> */}
      </>
    );
  }
}

export default MovieDetailsPage;
