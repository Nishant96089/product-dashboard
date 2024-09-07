import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductList from '../components/ProductList';

const products = [
  { id: '1', title: 'Product 1', price: 100, popularity: 200 },
  { id: '2', title: 'Product 2', price: 200, popularity: 400 },
];

describe('ProductList Component', () => {
  it('renders the product list', () => {
    render(<ProductList products={products} onProductClick={() => {}} />);
    const product1 = screen.getByText('Product 1');
    const product2 = screen.getByText('Product 2');

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });

  it('calls onProductClick when a product is clicked', () => {
    const mockOnProductClick = jest.fn();
    render(<ProductList products={products} onProductClick={mockOnProductClick} />);
    const product1 = screen.getByText('Product 1');

    fireEvent.click(product1);
    expect(mockOnProductClick).toHaveBeenCalledWith(products[0]);
  });
});
