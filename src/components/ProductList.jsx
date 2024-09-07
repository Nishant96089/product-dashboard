import React from 'react';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => onProductClick(product)}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
