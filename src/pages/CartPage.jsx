import React, { useState } from 'react'; // Importation de React
import { useCart } from '../context/CartContext'; // Importation du contexte du panier
import './CartPage.css'; // Importation des styles CSS pour cette page

const CartPage = ({ isUserLoggedIn }) => {
  const { cart, clearCart } = useCart(); // Récupération du panier et fonction pour vider le panier
  const [checkoutMessage, setCheckoutMessage] = useState(""); // Message de confirmation du checkout

  // Fonction pour calculer le total du panier
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Fonction pour gérer le checkout
  const handleCheckout = () => {
    if (isUserLoggedIn) {
      // Si l'utilisateur est connecté, vider le panier et afficher un message
      clearCart(); // Vide le panier
      setCheckoutMessage("Votre commande a été passée avec succès !"); // Affiche un message de succès
    } else {
      // Si l'utilisateur n'est pas connecté, affiche un message d'erreur
      setCheckoutMessage("Veuillez vous connecter pour passer commande.");
    }
  };

  return (
    <div className="cart-page"> {/* Conteneur principal de la page panier */}
      <h2>Mon Panier</h2> {/* Titre de la page */}

      {/* Vérification si le panier est vide */}
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p> // Affichage si le panier est vide
      ) : (
        <div>
          <ul> {/* Liste des articles dans le panier */}
            {cart.map((item, index) => (
              <li key={index} className="cart-item"> {/* Chaque élément du panier */}
                <img src={item.image} alt={item.name} className="cart-image" /> {/* Image du produit */}
                <div className="cart-details"> {/* Détails de l'article */}
                  <p><strong>{item.name}</strong></p> {/* Nom du produit */}
                  <p>Prix : {item.price}€</p> {/* Prix de l'article */}
                  <p>Quantité : {item.quantity}</p> {/* Quantité de l'article */}
                </div>
              </li>
            ))}
          </ul>

          {/* Section pour afficher le total du panier */}
          <div className="cart-total">
            <p><strong>Total : </strong>{getTotal().toFixed(2)}€</p> {/* Affichage du total avec deux décimales */}
          </div>

          {/* Bouton checkout visible uniquement si l'utilisateur est connecté */}
          {isUserLoggedIn && (
            <button onClick={handleCheckout} className="checkout-button">
              Passer la commande
            </button>
          )}

          {/* Affichage du message de checkout */}
          {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default CartPage; // Exportation du composant
