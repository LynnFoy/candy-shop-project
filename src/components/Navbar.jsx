// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // ✅ Importer le hook personnalisé pour accéder au UserContext

const Navbar = () => {
  const { username } = useUser(); // ✅ Utiliser username du contexte

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Candy Shop</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Accueil</Link>
        <Link to="/category/chips" className="navbar-link">Chips</Link>
        <Link to="/category/chocolates" className="navbar-link">Chocolats</Link>
        <Link to="/category/icecream" className="navbar-link">Glaces</Link>
        <Link to="/cart" className="navbar-link">Panier</Link>
        <Link to="/login" className="navbar-link">
          {username === "Guest" ? "Connexion" : username} {/* Affiche "Connexion" si guest, sinon le nom de l'utilisateur */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
