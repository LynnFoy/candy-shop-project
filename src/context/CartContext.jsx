import React, { createContext, useContext, useState } from 'react';

// Créer un contexte pour le panier
const CartContext = createContext();

// Hook pour utiliser le contexte du panier
export const useCart = () => useContext(CartContext);

// Composant Provider pour encapsuler les composants qui auront accès au panier
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier ou augmenter sa quantité
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Si le produit existe déjà, on augmente sa quantité
      updateQuantity(product.id, 'increase');
    } else {
      // Sinon, on ajoute un nouveau produit avec quantité = 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Mettre à jour la quantité d'un produit dans le panier
  const updateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === 'increase'
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  // Supprimer un produit du panier
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
