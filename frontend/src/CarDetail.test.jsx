import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { CarDetail } from './CarDetail';

test('displays car details', async () => {
  const car = {
    name: 'Car A',
    brand: 'BrandA',
    model: 'ModelA',
    year: '2020',
    value: '$10000'
  };
  const { container } = render(<CarDetail car={car} />);

  expect(screen.getByText('Car A')).toBeInTheDocument();
  expect(screen.getByText('BrandA')).toBeInTheDocument();
  expect(screen.getByText('ModelA')).toBeInTheDocument();
  expect(screen.getByText('2020')).toBeInTheDocument();
  expect(screen.getByText('$10000')).toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
