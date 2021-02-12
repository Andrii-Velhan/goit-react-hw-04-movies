import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
// import Button from './components/Button';

class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
    // console.log('query:', name);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery query={this.state.query} />

        <ToastContainer autoClose={2500} />
      </>
    );
  }
}

export default App;
