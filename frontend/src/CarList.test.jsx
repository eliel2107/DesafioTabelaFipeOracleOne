import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CarList } from './CarList';

test('renders cars and handles selection', async () => {
  const cars = [
    { id: 1, name: 'Car A' },
    { id: 2, name: 'Car B' }
  ];
  const handleSelect = jest.fn();
  const { container } = render(<CarList cars={cars} onSelect={handleSelect} />);

  fireEvent.click(screen.getByText('Car A'));
  expect(handleSelect).toHaveBeenCalledWith(cars[0]);
  expect(screen.getByText('Car B')).toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
