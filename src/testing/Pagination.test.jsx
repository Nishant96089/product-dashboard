import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination Component', () => {
  it('renders pagination buttons', () => {
    render(<Pagination itemsPerPage={5} totalItems={20} paginate={() => {}} />);
    const page1 = screen.getByText('1');
    const page2 = screen.getByText('2');
    const page3 = screen.getByText('3');
    const page4 = screen.getByText('4');

    expect(page1).toBeInTheDocument();
    expect(page2).toBeInTheDocument();
    expect(page3).toBeInTheDocument();
    expect(page4).toBeInTheDocument();
  });

  it('calls paginate on page button click', () => {
    const mockPaginate = jest.fn();
    render(<Pagination itemsPerPage={5} totalItems={20} paginate={mockPaginate} />);
    const page1 = screen.getByText('1');

    fireEvent.click(page1);
    expect(mockPaginate).toHaveBeenCalledWith(1);
  });
});
