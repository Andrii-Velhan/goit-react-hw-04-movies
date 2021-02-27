import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import './SearchBar.scss';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;

    if (value.trim() === '') {
      toast('Input data !!!');
      return;
    }

    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            className="SearchFormInput"
            type="text"
            name="query"
            value={value}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="SearchFormButton">
            Search
          </button>
        </form>
      </div>
    );
  }
}
