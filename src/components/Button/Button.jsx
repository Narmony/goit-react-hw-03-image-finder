import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handlePage }) => {
  return (
    <button type="button" onClick={handlePage} className={styles.button}>
      Load more
    </button>
  );
};
Button.propTypes = {
  handlePage: PropTypes.func.isRequired,
};
export default Button;
