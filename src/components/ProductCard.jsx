import React from 'react';
import { useCart } from '../context/CartContext'; // Utilisation du contexte du panier

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Hook pour ajouter au panier

  const handleAddToCart = () => {
    addToCart(product); // Ajouter le produit au panier
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}€</p>
      <p>{product.description}</p>

      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
