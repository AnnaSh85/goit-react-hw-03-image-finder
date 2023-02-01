import propTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onclick }) => (
  <li className={styles.imageGalleryItem} id={image.id} onClick={onclick}>
    <img
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
      className={styles.imageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.shape({
    id: propTypes.number.isRequired,
    webformatURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
    largeImageURL: propTypes.string.isRequired,
  }),
  onclick: propTypes.func.isRequired,
};

export default ImageGalleryItem;
