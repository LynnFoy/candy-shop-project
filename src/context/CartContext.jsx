import React, { createContext, useContext, useState } from 'react'; // Importation des fonctions et hooks nécessaires de React

// Créer un contexte pour le panier, permettant de partager l'état du panier dans toute l'application
const CartContext = createContext();

// Hook pour utiliser le contexte du panier dans d'autres composants
export const useCart = () => useContext(CartContext);

// Composant Provider pour encapsuler les composants qui auront accès au panier
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // État pour gérer les produits dans le panier

  // Ajouter un produit au panier ou augmenter sa quantité si déjà présent
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id); // Vérifier si le produit existe déjà dans le panier
    if (existingProduct) {
      // Si le produit existe déjà, on augmente sa quantité
      updateQuantity(product.id, 'increase');
    } else {
      // Sinon, on ajoute un nouveau produit avec une quantité initiale de 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Mettre à jour la quantité d'un produit dans le panier (augmenter ou diminuer)
  const updateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === 'increase'
                  ? item.quantity + 1 // Augmenter la quantité de 1
                  : item.quantity > 1
                  ? item.quantity - 1 // Diminuer la quantité de 1 (mais ne pas descendre en dessous de 1)
                  : item.quantity,
            }
          : item
      )
    );
  };

  // Supprimer un produit du panier en fonction de son ID
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); // Filtrer le panier pour exclure l'élément avec l'ID spécifié
  };

  return (
    <CartContext.Provider
      value={{
        cart, // Fournir l'état du panier aux composants enfants
        addToCart, // Fournir la fonction pour ajouter un produit au panier
        updateQuantity, // Fournir la fonction pour mettre à jour la quantité d'un produit
        removeFromCart, // Fournir la fonction pour supprimer un produit du panier
      }}
    >
      {children} {/* Fournir le contexte aux composants enfants */}
    </CartContext.Provider>
  );
};
