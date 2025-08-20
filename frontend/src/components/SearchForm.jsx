import React, { useState, useEffect } from 'react';
import api from '../services/api.js';

function SearchForm({ onSearch }) {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [form, setForm] = useState({ brand: '', model: '', year: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    api
      .getBrands()
      .then(setBrands)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!form.brand) return;
    setLoading(true);
    api
      .getModels(form.brand)
      .then((res) => setModels(res.modelos))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [form.brand]);

  useEffect(() => {
    if (!form.brand || !form.model) return;
    setLoading(true);
    api
      .getYears(form.brand, form.model)
      .then(setYears)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [form.brand, form.model]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p role="alert">{error}</p>}
      {loading && <p>Carregando...</p>}

      <select name="brand" value={form.brand} onChange={handleChange}>
        <option value="">Selecione a marca</option>
        {brands.map((b) => (
          <option key={b.codigo} value={b.codigo}>
            {b.nome}
          </option>
        ))}
      </select>

      <select name="model" value={form.model} onChange={handleChange} disabled={!form.brand}>
        <option value="">Selecione o modelo</option>
        {models.map((m) => (
          <option key={m.codigo} value={m.codigo}>
            {m.nome}
          </option>
        ))}
      </select>

      <select name="year" value={form.year} onChange={handleChange} disabled={!form.model}>
        <option value="">Selecione o ano</option>
        {years.map((y) => (
          <option key={y.codigo} value={y.codigo}>
            {y.nome}
          </option>
        ))}
      </select>

      <button type="submit" disabled={!form.year}>
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
