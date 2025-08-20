import React, { useState, useEffect } from 'react';
import api from '../services/api.js';

function CarDetail({ selection }) {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!selection?.brand || !selection?.model || !selection?.year) {
      setCar(null);
      return;
    }
    setLoading(true);
    setError('');
    api
      .getCarPrice(selection.brand, selection.model, selection.year)
      .then(setCar)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selection]);

  if (!selection?.year) return <p>Selecione um veículo.</p>;
  if (loading) return <p>Carregando...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!car) return null;

  return (
    <div>
      <h2>{car.Modelo}</h2>
      <p>Marca: {car.Marca}</p>
      <p>Ano: {car.AnoModelo}</p>
      <p>Preço: {car.Valor}</p>
      <p>Combustível: {car.Combustivel}</p>
    </div>
  );
}

export default CarDetail;
