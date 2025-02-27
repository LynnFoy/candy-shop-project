import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../products.json';
import { useCart } from '../context/CartContext'; // Importer le contexte du panier
import './ProductDetailPage.css';

const ProductDetailsPage = () => {
  const { name } = useParams(); // Récupère le nom du produit dans l'URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Utilise la fonction pour ajouter au panier
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = [
      ...productsData.chips,
      ...productsData.chocolates,
      ...productsData.iceCreams,
    ].find((product) => product.name === decodeURIComponent(name));

    setProduct(foundProduct); // Mettre à jour l'état avec les informations du produit
  }, [name]);

  const handleBackClick = () => {
    navigate(-1); // Retourner à la page précédente
  };

  // Fonction pour ajouter au panier
  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Ajouter le produit au panier
      console.log(`${product.name} ajouté au panier.`);
    }
  };

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-details-page">
      {/* Ajout du bouton "Retour" */}
      <button className="back-button" onClick={handleBackClick}>
        Retour
      </button>
      <h2>{product.name}</h2>
      <div className="product-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-info">
          <p><strong>Description :</strong> {product.description}</p>
          <p><strong>Prix :</strong> {product.price} €</p>
          <p><strong>Origine :</strong> {product.origin}</p>
          <p><strong>Stock disponible :</strong> {product.stock}</p>
          
          {/* Le bouton "Ajouter au panier" */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
