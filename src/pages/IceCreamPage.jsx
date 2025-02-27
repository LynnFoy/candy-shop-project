import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products.json'; // Importer les produits
import './IceCreamPage.css';

const IceCreamPage = () => {
  const [iceCreamProducts, setIceCreamProducts] = useState([]);

  useEffect(() => {
    setIceCreamProducts(productsData.iceCreams); // Charger les produits de glace
  }, []);

  return (
    <div className="ice-cream-page">
      <h2 className="section-title">Glaces</h2>
      <div className="carousel">
        {iceCreamProducts.map((product, index) => (
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

export default IceCreamPage;
