import React, { useState, useMemo } from 'react';

function CarList({ cars = [], loading, error, onSelect }) {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() =>
    cars.filter((c) =>
      c.nome.toLowerCase().includes(filter.toLowerCase())
    ),
  [cars, filter]);

  const sorted = useMemo(() => {
    const sortedCars = [...filtered];
    if (sort === 'name') {
      sortedCars.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sort === 'price') {
      sortedCars.sort((a, b) => (a.valor || 0) - (b.valor || 0));
    }
    return sortedCars;
  }, [filtered, sort]);

  const totalPages = Math.ceil(sorted.length / perPage) || 1;
  const current = sorted.slice((page - 1) * perPage, page * perPage);

  const changePage = (offset) => {
    setPage((p) => Math.min(Math.max(1, p + offset), totalPages));
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="name">Nome</option>
        <option value="price">Preço</option>
      </select>

      <ul>
        {current.map((car) => (
          <li key={car.codigo} onClick={() => onSelect && onSelect(car)}>
            {car.nome} {car.valor ? `- ${car.valor}` : ''}
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => changePage(-1)} disabled={page === 1}>
          Anterior
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button onClick={() => changePage(1)} disabled={page === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  );
}

export default CarList;
