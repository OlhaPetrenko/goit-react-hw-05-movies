import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import s from './SearchForm.module.css';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  function handleChange(event) {
    setQuery(event.currentTarget.value.toLowerCase());
    // console.log(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (query.trim() === '') {
      alert('Введіть запит!');
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={s.Form}>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Введи назву фільму"
          onChange={handleChange}
          className={s.Input}
        />
        <Button type="submit" title="Знайти" />
      </form>
    </>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
