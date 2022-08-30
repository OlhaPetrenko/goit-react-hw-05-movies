import { useState } from 'react';

import s from './SearchForm.module.css';
function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');
  function handleChange(event) {
    setQuery(event.currentTarget.value.toLowerCase());
    console.log(event.currentTarget.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('forma' + new Date());
    if (query.trim() === '') {
      alert('Введіть запит!');
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          placeholder="Введи назву фільму"
          onChange={handleChange}
          className={s.Input}
        />
        <button type="submit" className={s.Btn}>
          Знайти
        </button>
      </form>
    </>
  );
}

export default SearchForm;
