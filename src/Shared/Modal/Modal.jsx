import propTypes from 'prop-types';
import styles from './modal.module.css';

const Modal = ({ src, alt, handleClose }) => (
  <div className={styles.overlay} onClick={handleClose}>
    <div className={styles.modal}>
      <img src={src} alt={alt} />
    </div>
  </div>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};

export default Modal;
