import React from 'react';

export function CarList({ cars = [], onSelect }) {
  if (!cars.length) {
    return <p>No cars found</p>;
  }

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <button onClick={() => onSelect?.(car)}>{car.name}</button>
        </li>
      ))}
    </ul>
  );
}
