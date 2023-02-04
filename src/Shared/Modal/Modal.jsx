import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Component } from 'react';

import styles from './modal.module.css';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  static propTypes = {
    modalData: propTypes.shape({
      largeImageURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
    }),
    onModalClose: propTypes.func,
  };

  handleCloseModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  render() {
    const { largeImageURL, tags } = this.props.modalData;
    return createPortal(
      <div className={styles.overlay} onClick={this.handleCloseModal}>
        <div className={styles.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
