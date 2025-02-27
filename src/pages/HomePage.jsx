import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './HomePage.css';
import productsData from '../products.json';

const HomePage = () => {
  const [chipsProducts, setChipsProducts] = useState([]);
  const [chocolateProducts, setChocolateProducts] = useState([]);
  const [iceCreamProducts, setIceCreamProducts] = useState([]);

  useEffect(() => {
    setChipsProducts(productsData.chips);
    setChocolateProducts(productsData.chocolates);
    setIceCreamProducts(productsData.iceCreams);
  }, []);

  return (
    <div className="home-page">
      {/* ✅ On ajoute une div pour mieux structurer le titre */}
      <div className="title-container">
        <h2 className="section-title">Bonbons en vedette</h2>
      </div>

      {/* ✅ Carrousel bien espacé du titre */}
      <Carousel />

      {/* Section Chips */}
      <h3 className="category-title">Chips en vedette</h3>
      <div className="carousel">
        {chipsProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>

      {/* Section Chocolats */}
      <h3 className="category-title">Chocolats en vedette</h3>
      <div className="carousel">
        {chocolateProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>

      {/* Section Glaces */}
      <h3 className="category-title">Glaces en vedette</h3>
      <div className="carousel">
        {iceCreamProducts.map((product, index) => (
          <Link to={`/product/${encodeURIComponent(product.name)}`} key={index} className="product-container">
            <img src={product.image} alt={product.name} className="product-image" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
