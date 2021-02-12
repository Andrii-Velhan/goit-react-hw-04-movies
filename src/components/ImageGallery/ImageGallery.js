import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pixabayAPI from '../../services/apiService';
import './ImageGallery.css';
import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Modal from '../Modal';
import { MdClear } from 'react-icons/md';
import Button from '../Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
  state = {
    item: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    per_page: 12,
    showModal: false,
    largeImage: {
      url: '',
      alt: '',
    },
  };

  static propTypes = {
    query: PropTypes.string,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      await this.reset();
      this.setState({ status: Status.PENDING });
      this.fetch(nextQuery);
    }
  }

  fetch = nextQuery => {
    const { page } = this.state;
    pixabayAPI
      .fetchImg(page, nextQuery)
      .then(({ hits }) => {
        if (hits.length === 0) {
          return Promise.reject(new Error('Images not found!'));
        }

        this.setState(prevState => ({
          item: [...prevState.item, ...hits],
          status: Status.RESOLVED,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };

  handleBtnClick = async () => {
    const nextQuery = this.props.query;
    await this.incrementPage();
    this.fetch(nextQuery);
    this.onScroll();
  };

  onScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickItem = props => {
    this.setState({
      largeImage: props,
    });
    this.toggleModal();
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  reset = () => {
    this.setState({ page: 1, item: [], largeImage: { url: '', alt: '' } });
  };

  render() {
    const { item, error, status, showModal, largeImage } = this.state;
    // const { query } = this.props;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return (
        <div className="Loader">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={200}
            width={200}
            timeout={3000}
          />
        </div>
      );
    }

    if (status === 'rejected') {
      return toast.error(`${error.message}`);
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="ImageGallery">
            {item.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                url={largeImageURL}
                alt={tags}
                onClickItem={this.onClickItem}
              />
            ))}
          </ul>
          {showModal && (
            <Modal image={largeImage} onClose={this.toggleModal}>
              <MdClear
                className="btn-close"
                type="button"
                onClick={this.toggleModal}
              />
              <img src={largeImage.url} alt={largeImage.alt} />
            </Modal>
          )}
          {
            // item.length > 12 &&
            <Button onLoadMore={this.handleBtnClick} />
          }
        </>
      );
    }
  }
}

export default ImageGallery;
