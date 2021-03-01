import React, { Component } from 'react';
import themoviedbAPI from '../services/apiService';
import { toast } from 'react-toastify';

export default class MovieReview extends Component {
  state = {
    reviews: [],
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h1>uyguguy</h1>
        <ul>
          {reviews.length !== 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}
