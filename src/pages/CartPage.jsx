import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart } = useCart();

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h2>Mon Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <div className="cart-details">
                  <p><strong>{item.name}</strong></p>
                  <p>Prix : {item.price}€</p>
                  <p>Quantité : {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <p><strong>Total : </strong>{getTotal().toFixed(2)}€</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
