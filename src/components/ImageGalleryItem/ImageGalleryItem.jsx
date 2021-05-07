import styles from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, alt, largeImgUrl, onOpenModal }) => (
  <li key={id} className={styles.imageGalleryItem}>
    <img
      onClick={e => onOpenModal(e)}
      data-source={largeImgUrl}
      src={src}
      alt={alt}
      className={styles.imageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  onOpenModal: PropTypes.func,
};

export default ImageGalleryItem;
