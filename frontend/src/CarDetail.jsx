import React from 'react';

export function CarDetail({ car }) {
  if (!car) {
    return <p>No car selected</p>;
  }

  return (
    <div>
      <h2>{car.name}</h2>
      <dl>
        <dt>Brand</dt>
        <dd>{car.brand}</dd>
        <dt>Model</dt>
        <dd>{car.model}</dd>
        <dt>Year</dt>
        <dd>{car.year}</dd>
        <dt>Value</dt>
        <dd>{car.value}</dd>
      </dl>
    </div>
  );
}
