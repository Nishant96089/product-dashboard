import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/Filters';

describe('Filters Component', () => {
  it('renders price range filter', () => {
    render(
      <Filters
        priceRange={[0, Infinity]}
        setPriceRange={() => {}}
        popularityRange={[0, Infinity]}
        setPopularityRange={() => {}}
      />
    );
    const priceFilter = screen.getByLabelText(/Price Range:/i);
    expect(priceFilter).toBeInTheDocument();
  });

  it('calls setPriceRange on price range change', () => {
    const mockSetPriceRange = jest.fn();
    render(
      <Filters
        priceRange={[0, Infinity]}
        setPriceRange={mockSetPriceRange}
        popularityRange={[0, Infinity]}
        setPopularityRange={() => {}}
      />
    );

    fireEvent.change(screen.getByLabelText(/Price Range:/i), {
      target: { value: '0-5000' },
    });

    expect(mockSetPriceRange).toHaveBeenCalledWith([0, 5000]);
  });
});
