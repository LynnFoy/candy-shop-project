import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Importer les produits
import './ChocolatePage.css';

const ChocolatsPage = () => {
  const [chocolateProducts, setChocolateProducts] = useState([]);

  useEffect(() => {
    setChocolateProducts(productsData.chocolates); // Charger les produits de chocolat
  }, []);

  return (
    <div className="chocolats-page">
      <h2 className="section-title">Chocolats</h2>
      <div className="carousel">
        {chocolateProducts.map((product, index) => (
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

export default ChocolatsPage;
