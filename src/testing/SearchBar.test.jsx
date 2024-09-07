import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders the input field', () => {
    render(<SearchBar searchTerm="" setSearchTerm={() => {}} />);
    const inputElement = screen.getByPlaceholderText(/search products.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls setSearchTerm on input change', () => {
    const mockSetSearchTerm = jest.fn();
    render(<SearchBar searchTerm="" setSearchTerm={mockSetSearchTerm} />);
    const inputElement = screen.getByPlaceholderText(/search products.../i);

    fireEvent.change(inputElement, { target: { value: 'Test' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('Test');
  });
});
