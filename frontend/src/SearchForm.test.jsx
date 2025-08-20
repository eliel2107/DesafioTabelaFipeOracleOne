import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { SearchForm } from './SearchForm';

test('calls onSearch with input value', async () => {
  const handleSearch = jest.fn();
  const { container } = render(<SearchForm onSearch={handleSearch} />);
  const input = screen.getByLabelText(/buscar/i);

  fireEvent.change(input, { target: { value: 'Fiat' } });
  fireEvent.submit(input.closest('form'));

  expect(handleSearch).toHaveBeenCalledWith('Fiat');

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
