import styles from './searchBar.module.css';
import propTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};