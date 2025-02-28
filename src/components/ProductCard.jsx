import React from 'react'; // Importation de React, nécessaire pour créer un composant React
import { useCart } from '../context/CartContext'; // Importation du hook 'useCart' depuis le contexte du panier

// Définition du composant ProductCard, qui prend un objet 'product' en props
const ProductCard = ({ product }) => {
  // Utilisation du hook 'useCart' pour récupérer la fonction 'addToCart' qui permet d'ajouter un produit au panier
  const { addToCart } = useCart(); 

  // Fonction appelée lors du clic sur le bouton "Ajouter au panier"
  const handleAddToCart = () => {
    addToCart(product); // Ajout du produit au panier via la fonction 'addToCart'
  };

  return (
    // Structure HTML de la carte produit, affichant les détails du produit
    <div className="product">
      <img src={product.image} alt={product.name} /> {/* Affichage de l'image du produit avec une description alternative */}
      <p>{product.name}</p> {/* Affichage du nom du produit */}
      <p>{product.price}€</p> {/* Affichage du prix du produit */}
      <p>{product.description}</p> {/* Affichage de la description du produit */}

      {/* Bouton pour ajouter le produit au panier, déclenche la fonction 'handleAddToCart' au clic */}
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard; // Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
