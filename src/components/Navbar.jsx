import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Candy Shop</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Accueil</Link>
        <Link to="/category/chips" className="navbar-link">Chips</Link> {/* Lien vers Chips */}
        <Link to="/category/chocolates" className="navbar-link">Chocolats</Link> {/* Lien vers Chocolats */}
        <Link to="/category/icecream" className="navbar-link">Glaces</Link> {/* Lien vers Glaces */}
        <Link to="/cart" className="navbar-link">Panier</Link>
        <Link to="/login" className="navbar-link">Connexion</Link>
      </div>
    </nav>
  );
};

export default Navbar;
