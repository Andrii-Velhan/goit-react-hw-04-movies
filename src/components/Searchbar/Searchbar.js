import React, { Component } from 'react';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    name: '',
    // number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({ name: event.currentTarget.value.toLoverCace() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;

    // console.log(name);

    if (name.trim() === '') {
      toast.error('Enter data !!!');
      // alert('Enter data !!!');
    } else {
      this.props.onSubmit(name);

      this.setState({ name: '' });
    }
  };

  render() {
    // const { name } = this.state;
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              {/* <ImSearch style={{ marginRight: 8 }} /> */}
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              name="name"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
