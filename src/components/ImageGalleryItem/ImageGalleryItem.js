import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem({ id, src, alt, url, onClickItem }) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => onClickItem({ url, alt })}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
