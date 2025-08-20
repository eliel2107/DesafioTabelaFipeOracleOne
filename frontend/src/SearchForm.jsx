import React from 'react';

export function SearchForm({ onSearch }) {
  const [value, setValue] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form onSubmit={submit} aria-label="search form">
      <label htmlFor="search-input">Buscar</label>
      <input
        id="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}
