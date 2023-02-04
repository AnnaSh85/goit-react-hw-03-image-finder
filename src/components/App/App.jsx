import { Component } from 'react';
import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import fetchImages from '../../Shared/Api/fetchImages';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../../Shared/Modal/Modal';
import styles from './app.module.css';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalData: null,
    totalHits: 0,
  };

  componentDidUpdate(_, prevState) {
    const { value, page, images } = this.state;

    if (page !== prevState.page || value !== prevState.value) {
      this.setState({ isLoading: true });
      fetchImages(value, page)
        .then(({ data }) =>
          this.setState({
            images: [...images, ...data.hits],
            totalHits: data.totalHits,
          })
        )
        .catch(err => alert(err.message))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleSearchbarSubmit = value => {
    this.setState({ value, page: 1, images: [] });
  };

  setModalData = modalData => {
    this.setState({ modalData, isModalOpen: true });
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { images, isLoading, modalData, isModalOpen, totalHits, page } =
      this.state;
    return (
      <>
        <Searchbar onFormSubmit={this.handleSearchbarSubmit} />
        <div className={styles.app}>
          <ImageGallery images={images} onImageClick={this.setModalData} />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          images.length > 0 &&
          page <= totalHits / 12 && <Button onClick={this.changePage} />
        )}
        {isModalOpen && (
          <Modal modalData={modalData} onModalClose={this.handleModalClose} />
        )}
      </>
    );
  }
}

export default App;
