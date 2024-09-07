import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Sorting from "./components/Sorting";
import Pagination from "./components/Pagination";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [popularityRange, setPopularityRange] = useState([0, Infinity]);
  const [sortBy, setSortBy] = useState("price-asc");

  useEffect(() => {
    axios
      .get("/api/interview-materials/products.json") // Using the proxy path here from vite.config.js
      .then((response) => {
        const productsData = response.data.products;
        const productsArray = Object.keys(productsData).map((key) => ({
          id: key,
          ...productsData[key],
        }));
        setProducts(productsArray);
        setFilteredProducts(productsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch product data.");
      });
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.popularity >= popularityRange[0] &&
        product.popularity <= popularityRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case "popularity-asc":
        filtered = filtered.sort((a, b) => a.popularity - b.popularity);
        break;
      case "popularity-desc":
        filtered = filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    // Reset to page 1 when filters or search change
    setCurrentPage(1);
  }, [searchTerm, priceRange, popularityRange, sortBy, products]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="app">
      <center>
        <h1 className="dashboard-heading">Product Dashboard</h1>
      </center>
      {error && <div className="error">{error}</div>}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        popularityRange={popularityRange}
        setPopularityRange={setPopularityRange}
      />
      <div className="sort-page">
        <Sorting setSortBy={setSortBy} />

        <div className="page-number">
          <span className="page">Page:</span> {currentPage}
        </div>
      </div>

      <ProductList
        products={currentProducts}
        onProductClick={setSelectedProduct}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        paginate={handlePageChange}
      />
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;
