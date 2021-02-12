import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onLoadMore }) => (
  <div className="Button-container">
    <button className="Button" type="button" onClick={onLoadMore}>
      Load more
    </button>
  </div>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
