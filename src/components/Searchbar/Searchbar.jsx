import styles from './searchBar.module.css';

import propTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { SearchForm, Input } from './styled';

const Searchbar = ({ onFormSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={(values, { resetForm }) => {
          onFormSubmit(values.value.trim());
          resetForm();
        }}
      >
        <SearchForm>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>
          <Field
            as={Input}
            name="value"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: propTypes.func.isRequired,
};

export default Searchbar;
