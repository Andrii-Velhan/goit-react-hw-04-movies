import React, { Component } from 'react';
import themoviedbAPI from '../../services/apiService';
import Axios from 'axios';
import './Cast.css';
// import { toast } from 'react-toastify';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  async componentDidMount() {
    // console.log('componentDidMount');
    const { movieId } = this.props.match.params;
    // const { movieId } = Number(this.props.match.params.movieId);
    // console.log('from Cast movieId:', movieId);
    // console.log(this.state.cast);

    const response = await Axios.get(
      `${themoviedbAPI.BASE_URL}movie/${movieId}/credits?api_key=${themoviedbAPI.MY_KEY}&language=en-US`,
    ).finally(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
    this.setState({ ...response.data });
    // console.log(this.state.cast);
    //==============
    // themoviedbAPI
    //   .fetchCast(movieId)
    //   .then(results => this.setState({ cast: results.cast }))
    //   .catch(error => {
    //     toast.error(error.message);
    //     this.setState({ error: error.message });
    //   })
    //   .finally(() => {
    //     window.scrollTo({
    //       top: document.documentElement.scrollHeight,
    //       behavior: 'smooth',
    //     });
    //   });
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate');
  //   const { movieId } = this.props.match.params;
  //   console.log(movieId);

  //   const response = await Axios.get(
  //     `${themoviedbAPI.BASE_URL}movie/${movieId}/credits?api_key=${themoviedbAPI.MY_KEY}&language=en-US`,
  //   ).finally(() => {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   });
  //   this.setState({ ...response.data });
  //   console.log(this.state.cast);
  // }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className="CastGallery">
          {cast.length > 0 ? (
            cast.map(({ name, profile_path, character, cast_id }) => (
              <li className="ImageGalleryItem" key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `${themoviedbAPI.IMG_URL}${profile_path}`
                      : `${themoviedbAPI.defaultImage}`
                  }
                  alt={name}
                />
                <div className="CastGallery__info-container"><p>{name}</p>
                <p>Character: {character}</p></div>
              </li>
            ))
          ) : (
            <p>We don't have any cast for this movie</p>
          )}
        </ul>
      </>
    );
  }
}

export default Cast;
