import React from "react";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="product-details">
      <button onClick={onClose}>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-closed-web-browser-tab-for-no-entry-way-basic-color-tal-revivo.png"
          alt="external-closed-web-browser-tab-for-no-entry-way-basic-color-tal-revivo"
        />
      </button>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Popularity: {product.popularity}</p>
      <p>Description: {product.description || "No description available"}</p>
    </div>
  );
};

export default ProductDetails;
