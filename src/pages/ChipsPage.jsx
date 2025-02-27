import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Importer les produits
import './ChipsPage.css';

const ChipsPage = () => {
  const [chipsProducts, setChipsProducts] = useState([]);

  useEffect(() => {
    setChipsProducts(productsData.chips); // Charger les produits de chips
  }, []);

  return (
    <div className="chips-page">
      <h2 className="section-title">Chips</h2>
      <div className="carousel">
        {chipsProducts.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}€</p>
            <p>{product.description}</p>
            {/* Lien vers la page des détails du produit */}
            <Link to={`/product/${encodeURIComponent(product.name)}`} className="product-detail-link">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsPage;
