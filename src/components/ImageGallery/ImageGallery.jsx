import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import styles from './imageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.imageGallery}>
    {images.map((image, id) => (
      <ImageGalleryItem onclick={onImageClick} image={image} key={id} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};

export default ImageGallery;
