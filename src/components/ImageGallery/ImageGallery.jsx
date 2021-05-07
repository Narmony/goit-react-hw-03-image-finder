import styles from './imageGallery.module.css';
import ImageGalleryItem from '../../components/ImageGalleryItem/index';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits, onOpenModal }) => {
  return (
    <ul className={styles.imageGallery}>
      {hits.map(hit => (
        <ImageGalleryItem
          id={hit.id}
          key={hit.id}
          src={hit.webformatURL}
          largeImgUrl={hit.largeImageURL}
          alt={hit.tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
};

export default ImageGallery;
