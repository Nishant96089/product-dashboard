import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDetails from '../components/ProductDetails';

const product = {
  id: '1',
  title: 'Product 1',
  price: 100,
  popularity: 200,
  description: 'A great product',
};

describe('ProductDetails Component', () => {
  it('renders product details', () => {
    render(<ProductDetails product={product} onClose={() => {}} />);
    const title = screen.getByText('Product 1');
    const price = screen.getByText('Price: 100');
    const popularity = screen.getByText('Popularity: 200');
    const description = screen.getByText('Description: A great product');

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(popularity).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(<ProductDetails product={product} onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button');

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
